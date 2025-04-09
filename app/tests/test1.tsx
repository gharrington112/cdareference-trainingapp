import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export const meta = {
  headerShown: false, // Hide the header for this screen
};

const imageMap = {
  question4: require('@/assets/images/question4.png'),
  question6: require('@/assets/images/question6.png'),
  question7: require('@/assets/images/question7.png'),
  question9: require('@/assets/images/question9.png'),
  question25: require('@/assets/images/question25.png'),
};

const questions = [
  {
    question: "In the universal lettering system for primary teeth, which letter stands for the maxillary left second molar?",
    options: ["K", "J", "T", "C"],
    answer: "J"
  },
  
  {
    question: "The type of caries that occurs on the occlusal surfaces or the buccal and lingual grooves of posterior teeth is (are) ______.",
    options: ["root surface caries", "smooth surface caries", "pit and fissure caries", "secondary caries"],
    answer: "pit and fissure caries"
  },
  
  {
    question: "Which of the following is not one of the components of the ABCDs of basic life support?",
    options: ["access", "breathing", "circulation", "defibrillation"],
    answer: "access"
  },
  
  {
    question: "What does this charting symbol indicate?",
    options: ["gold crown", "stainless steel crown", "missing tooth", "post and core"],
    answer: "gold crown",
    imageKey: "question4"
  },
  
  {
    question: "Which surgical procedure describes a hemisection?",
    options: ["removal of the apical portion of the root", "removal of diseased tissue through scraping with a curette", "removal of one or more roots of a multirooted tooth without removing the crown", "removal of the root and crown by cutting through each lengthwise"],
    answer: "removal of diseased tissue through scraping with a curette"
  },
  
  {
    question: "What does this charting symbol indicate?",
    options: ["root canal", "missing tooth", "impacted tooth", "rotated tooth"],
    answer: "missing tooth",
    imageKey: "question6"
  },
  
  {
    question: "What does this charting symbol indicate?",
    options: ["full crown", "implant", "root canal", "bonded veneer"],
    answer: "bonded veneer",
    imageKey: "question7"
  },
  
  {
    question: "The respiration rate for an adult who has just participated in an aerobic activity might be:",
    options: ["10 to 20", "18 to 30", "20 to 40", "80 to 110"],
    answer: "80 to 110"
  },
  
  {
    question: "What does this charting symbol indicate?",
    options: ["implant", "fracture", "diastema", "root canal"],
    answer: "fracture",
    imageKey: "question9"
  },
  
  {
    question: "Using Black's classification of cavities, a lesion on the cervical third of a tooth is considered a Class ____ restoration or cavity.",
    options: ["I", "II", "III", "V"],
    answer: "V"
  },
  
  {
    question: "The abbreviation used in the progress notes or chart to indicate a mesioocclusodistal restoration with a buccal extension would be:",
    options: ["MeOcDiL", "LDOM", "MODB", "DOML"],
    answer: "MODB"
  },
  
  {
    question: "When working with anesthetic needles, the ___ the gauge number, the thicker is the needle.",
    options: ["larger", "smaller"],
    answer: "smaller"
  },
  
  {
    question: "The hard palate is recorded in the ____ impression.",
    options: ["mandibular", "maxillary"],
    answer: "maxillary"
  },
  
  {
    question: "The tooth-numbering system that uses a two-digit tooth recording system with the first digit indicating the quadrant and the second digit indicating the tooth within the quadrant, with numbering from the midline to the posterior, is referred to as the:",
    options: ["Universal System", "Palmer Notation System", "Fédération Dentaire Internationale System", "Bracket Numbering System"],
    answer: "Fédération Dentaire Internationale System"
  },
  
  {
    question: "Which of the following statements is not true as it relates to a patient's respiration?",
    options: ["If a patient knows the breaths are being monitored, he or she will usually change the breathing pattern.", "For children and teenagers, the respiration rate is higher than that of an adult.", "A person's respiration normally is not noticeable unless he or she is having trouble taking a breath.", "Respirations are normally higher in counts per minute than the pulse rate."],
    answer: "Respirations are normally higher in counts per minute than the pulse rate."
  },
  {
    question: "The respiration pattern of a patient in a state of tachypnea has:",
    options: ["a slow respiration rate", "excessively short, rapid breaths", "excessively long, rapid breaths", "a gurgling sound"],
    answer: "excessively short, rapid breaths"
  },
  {
    question: "The respirations of a patient who is hyperventilating will be exemplified by:",
    options: ["a slow respiration rate", "excessively short, rapid breaths", "excessively long, rapid breaths", "a gurgling sound"],
    answer: "excessively long, rapid breaths"
  },
  {
    question: "A patient who displays symptoms of unconsciousness, increased body temperature, rapid heart beat, and increased blood pressure may be displaying symptoms of:",
    options: ["a petit mal seizure", "a grand mal seizure", "hypoglycemia", "hyperglycemia"],
    answer: "hyperglycemia"
  },
  {
    question: "If a patient displays symptoms of hypoglycemia and is conscious, what is the first thing you should ask the patient?",
    options: ["What time did you awaken this morning?", "When did you last eat and did you take insulin?", "How many fingers do you see?", "Did you bring some lunch?"],
    answer: "When did you last eat and did you take insulin?"
  },
  {
    question: "The MyPyramid is an outline of what to eat each day. The smallest segment of the pyramid represents:",
    options: ["grains", "vegetables", "meats", "oils"],
    answer: "oils"
  },
  {
    question: "Any food that contains sugars or other carbohydrates that can be metabolized by bacteria in plaque is described as being:",
    options: ["sweet", "cariogenic", "composed of empty calories", "a complex carbohydrate"],
    answer: "cariogenic"
  },
  {
    question: "Organic substances that occur in plant and animal tissues are ____, and essential elements that are needed in small amounts to maintain health and function are ____.",
    options: ["minerals, vitamins", "fat-soluble vitamins, water-soluble vitamins", "vitamins, minerals", "cholesterol, minerals"],
    answer: "vitamins, minerals"
  },
  {
    question: "A horizontal or transverse plane divides the body into:",
    options: ["superior and inferior portions", "dorsal and ventral portions", "anterior and posterior portions", "medial and lateral portions"],
    answer: "superior and inferior portions"
  },
  {
    question: "Which of these instruments is a combination DE instrument used as an explorer and periodontal probe?",
    options: ["shepherd's hook", "cowhorn explorer", "right angle explorer", "expro"],
    answer: "expro"
  },
  {
    question: "The forceps are used in this portion of the clamp while placing the rubber dam.",
    options: ["A", "B", "C", "D", "E"],
    answer: "B",
    imageKey: "question25"
  }
];

export default function Test1Screen() {
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);
  const router = useRouter();
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';



  const handleAnswer = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  const handleRestart = () => {
    setScore(0);
    setSelectedOptions(Array(questions.length).fill(null));
    setShowScore(false);
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {showScore ? (
          <View>
            <Text style={[styles.resultText, { color: textColor }]}>Your Score: {score}/{questions.length}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRestart}> 
              <Text style={styles.buttonText}>Retake Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/')}> 
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          questions.map((q, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={[styles.question, { color: textColor }]}>{index + 1}. {q.question}</Text>

              {/* Render image if it exists */}
              {q.imageKey && (
                <Image
                  source={imageMap[q.imageKey]}
                  resizeMode="contain"
                />
              )}

              {q.options.map((option, optIndex) => (
                <TouchableOpacity
                  key={optIndex}
                  style={[styles.option, selectedOptions[index] === option && styles.selectedOption]}
                  onPress={() => handleAnswer(index, option)}
                >
                  <Text style={{ color: textColor }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))
        )}
        {!showScore && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#bbb',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
