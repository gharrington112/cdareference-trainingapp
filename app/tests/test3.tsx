import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Question } from "@/app/(tabs)/test"

export const meta = {
  headerShown: false, // Hide the header for this screen
};

const imageMap: { [key: string]: any } = {
  question60: require('@/assets/images/question60.png'),
  question65: require('@/assets/images/question65.png'),
  question66: require('@/assets/images/question66.png'),
};

const questions = [
  { // question 51
    question: "The process by which the living jawbone naturally grows around the implanted dental supports is known as:",
    options: [
      "subperiosteal integration",
      "transosteal implantation",
      "osseointegration",
      "osseus transintegration." ],
    answer: "osseointegration"
  },
  
  { // question 52
    question: "The treatment used as an attempt to save the pulp and encourage the formation of dentin at the site of the injury is a(n):",
    options: [
      "pulp capping",
      "pulpectomy",
      "apicoectomy",
      "pulpotomy" ],
    answer: "pulp capping"
  },
  
  { // question 53
    question: "The removal of the coronal portion of an exposed vital pulp is a(n):",
    options: [
      "pulpectomy",
      "pulpotomy",
      "apicoectomy",
      "root resection" ],
    answer: "pulpotomy"
  },
  
  { // question 54
    question: "The instrument used to adapt and condense gutta-percha points into the canal during endodontic treatment is:",
    options: [
      "Gates Glidden bur",
      "spreader/plugger",
      "endodontic spoon excavator",
      "broach" ],
    answer: "spreader/plugger"
  },
  
  { // question 55
    question: "The surgical removal of diseased gingival tissues is called:",
    options: [
      "gingivoplasty",
      "gingivectomy",
      "osteoplasty",
      "osteoectomy" ],
    answer: "gingivectomy"
  },
  
  { // question 56
    question: "A(n) _____ is a dentist with a license in the specialty of dentistry who provides restoration and replacement of natural teeth and supporting structures.",
    options: [
      "endodontist",
      "periodontist",
      "orthodontist",
      "prosthodontist" ],
    answer: "prosthodontist"
  },
  
  { // question 57
    question: "Periodontal pocket depth is charted at _____ points on each tooth during a baseline charting procedure.",
    options: [
      "two",
      "four",
      "six",
      "eight" ],
    answer: "six"
  },
  
  { // question 58
    question: "A periodontal pocket marker is similar in design to a _____.",
    options: [
      "thumb forceps",
      "cotton pliers",
      "Gracey scaler",
      "periodontal probe" ],
    answer: "cotton pliers"
  },
  
  { // question 59
    question: "A(n) _____ is an additive bone surgery that includes the reshaping and contouring of the bone.",
    options: [
      "ostectomy",
      "osteoplasty",
      "gingivoplasty",
      "apicoectomy" ],
    answer: "osteoplasty"
  },
  
  { // question 60
    question: "From the instruments shown below, select the periosteal elevator.",
    options: [ "A", "B", "C", "D", "E" ],
    answer: "A",
    imageKey: "question60"
  },
  
  { // question 61
    question: "Using Black's classification of cavities, a pit and fissure lesion on the occlusal surface of molars and premolars is considered a Class _____ cavity.",
    options: [
      "I",
      "II",
      "III",
      "V" ],
    answer: "I"
  },
  
  { // question 62
    question: "Using Black's classification of cavities, a pit lesion on the buccal surface of molars and premolars is considered a Class _____ restoration or cavity.",
    options: [
      "I",
      "II",
      "III",
      "V" ],
    answer: "I"
  },
  
  { // question 63
    question: "The more fixed attachment of the muscle that is usually the end attached to the more rigid part of the skeleton is the:",
    options: [
      "origin",
      "insertion",
      "contraction",
      "infraction" ],
    answer: "origin"
  },
  
  { // question 64
    question: "Which of the following teeth would not be found in the deciduous dentition?",
    options: [
      "lateral incisor",
      "cuspid",
      "second premolar",
      "second molar" ],
    answer: "second premolar"
  },
  
  { // question 65
    question: "A red line is used on this tooth. What does this charting symbol indicate?",
    options: [
      "missing",
      "to be extracted",
      "root canal",
      "impacted" ],
    answer: "to be extracted",
    imageKey: "question65"
  },
  
  { // question 66
    question: "What does this charting symbol indicate?",
    options: [
      "recurrent decay",
      "amalgam",
      "sealant",
      "missing" ],
    answer: "recurrent decay",
    imageKey: "question66"
  },
  
  { // question 67
    question: "On a cephalometric analysis, the abbreviation Na stands for:",
    options: [
      "anterior nasal spine",
      "gnathion",
      "nasion",
      "menton"
    ],
    answer: "nasion"
  },
  
  { // question 68
    question: "Which orthodontic pliers are used in fitting bands for fixed or removable appliances?",
    options: [
      "bird beak pliers",
      "contouring pliers",
      "posterior band remover pliers",
      "Howe (110) pliers"
    ],
    answer: "contouring pliers"
  },
  
  { // question 69
    question: "If the charting conditions indicate that there is a furcation involvement, some type of symbol will be placed:",
    options: [
      "at the apical area of the tooth",
      "on the occlusal surface of the tooth",
      "at the area between two or more root branches",
      "at the cervical region"
    ],
    answer: "at the area between two or more root branches"
  },
  
  { // question 70
    question: "A reproduction of an individual tooth on which a wax pattern may be constructed for a cast crown is a(n):",
    options: [
      "die",
      "model",
      "cast",
      "impression"
    ],
    answer: "die"
  },  
  
  { // question 71
    question: "Which of the following materials would not be used to take a final impression for the creation of a prosthetic device?",
    options: [
      "silicone",
      "polysiloxane",
      "alginate hydrocolloid",
      "agar hydrocolloid"
    ],
    answer: "alginate hydrocolloid"
  },
  
  { // question 72
    question: "A porcelain fused to metal crown would be designed so the porcelain would always be on the _____ surface.",
    options: [
      "lingual",
      "buccal/facial",
      "mesial",
      "distal"
    ],
    answer: "buccal/facial"
  },
  
  { // question 73
    question: "A glass ionomer material may be used for all of the following except a(n):",
    options: [
      "restorative material",
      "liner",
      "luting agent",
      "obtundant"
    ],
    answer: "obtundant"
  },
  
  { // question 74
    question: "If the room temperature and humidity are very low while mixing a final impression material, the setting time may be:",
    options: [
      "decreased",
      "increased"
    ],
    answer: "increased"
  },
  
  { // question 75
    question: "A porcelain fused to metal crown is being seated. The assistant will mix the cement to a _____ or _____ consistency.",
    options: [
      "base, secondary",
      "cementation, secondary",
      "base, primary",
      "cementation, primary"
    ],
    answer: "cementation, primary"
  }  

];

function shuffleArray(array: any) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Test3Screen() {
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const router = useRouter();
  const { colors, dark } = useTheme();
  const colorScheme = useColorScheme();
  const selectedColor = colorScheme === 'dark' ? '#0b6c75' : '#A1CEDC';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  // Shuffle questions
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  const handleAnswer = (index: any, option: any) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === shuffledQuestions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  const handleRestart = () => {
    setScore(0);
    setSelectedOptions(Array(shuffledQuestions.length).fill(null));
    setShowScore(false);
    setShuffledQuestions(shuffleArray(questions));
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {showScore ? (
          <View>
            <Text style={[styles.resultText, { color: textColor }]}>Your Score: {score}/{shuffledQuestions.length}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRestart}> 
              <Text style={styles.buttonText}>Retake Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/')}> 
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          shuffledQuestions.map((q, index) => (
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
                  style={[styles.option, selectedOptions[index] === option && { backgroundColor: selectedColor }]}
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
    backgroundColor: '#13b8c6',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#0b6c75',
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
    backgroundColor: '#0b6c75',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
