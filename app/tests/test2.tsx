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
  question31: require('@/assets/images/question31.png'),
  question32: require('@/assets/images/question32.png'),
  question47: require('@/assets/images/question47.png'),
  question48: require('@/assets/images/question48.png'),
};

const questions = [
  { // question 26
    question: "Which of the following statements is false as it relates to correct use of the HVE tip?",
    options: [
      "When using a surgical suction tip, it may be necessary to flush it with water periodically.",
      "Use the thumb to nose or pen grasp according to the location of placement of the tip.",
      "All HVE tips are disposable.",
      "When placing the tip, the assistant should place the HVE tip first and then the operator should place the handpiece."],
    answer: "All HVE tips are disposable."
  },
  
  { // question 27
    question: "The water-to-powder ratio generally used for an adult maxillary impresion is _____ measures of water, _____ scoops of powder.",
    options: ["3, 3", "3, 2", "3, 4", "2, 2"],
    answer: "3, 3"
  },
  
  { // question 28
    question: "High-volume evacuation provides all except which of the following.",
    options: [
      "increases the patient's desire to rinse",
      "decreases the patient's desire to rinse",
      "decreases the amount of aerosol emanating from the patient's mouth",
      "increases visibility" ],
    answer: "increases the patient's desire to rinse"
  },

  { // question 29
    question: "Which of the following statements is not a concept of four-handed dentistry?",
    options: [
      "Place the patient in the supine position.",
      "The operator and assistant should be as close to the patient as possible.",
      "Use present tray setups with instruments placed in sequence of use.",
      "Use a wide winged patient chairback." ],
    answer: "Use a wide winged patient chairback."
  },

  { // question 30
    question: "The ___ handpiece can operate both forward and backward and can be used with a variety of attachments.",
    options: ["high-speed", "laboratory", "low-speed", "laser" ],
    answer: "low-speed"
  },
  
  { // question 31
    question: "When the Tofflemire matrix band retainer is used, which of the knobs or devices would be used to adjust the size or loop of the matrix band to fix around the tooth and loosen the band for removal?",
    options: ["A", "B", "C", "D"],
    answer: "D",
    imageKey: "question31"
  },
  
  { // question 32
    question: "Which of the following instruments is a K style file?",
    options: ["A", "B", "C", "D"],
    answer: "B",
    imageKey: "question32"
  },
  
  { // question 33
    question: "Which of the following instruments would be used to remove debris or granulation tissue from a surgical site?",
    options: [
      "rongeur forceps",
      "surgical curette",
      "periodontal probe",
      "periosteal elevator" ],
    answer: "surgical curette"
  },
  
  { // question 34
    question: "Which of the following statements is true when using a Tofflemire matrix band and retainer?",
    options: [
      "The matrix retainer and wedge are both placed on the buccal.",
      "The matrix retainer is placed on the buccal and the wedge is placed from the lingual at the proximal surface involved.",
      "The matrix retainer is placed on the lingual and the wedge is placed from the buccal at the proximal surface involved.",
      "It is not necessary to use a wedge with a Tofflemire matrix band and retainer." ],
    answer: "The matrix retainer is placed on the buccal and the wedge is placed from the lingual at the proximal surface involved."
  },
  
  { // question 35
    question: "The dental team is completing an amalgam procedure on 4MOD. Which of the following statements is true?",
    options: [
      "One wedge and no smooth surface carvers would be used.",
      "Two wedges, smooth surface, and anatomical carvers would be used.",
      "There is no need to use a matrix band and retainer in this situation.",
      "There is no need to use wedges in this situation." ],
    answer: "Two wedges, smooth surface, and anatomical carvers would be used."
  },
  
  { // question 36
    question: "When a two-paste system is used for a composite material, the paste of either jar should not be cross-contaminated because:",
    options: [
      "it will cause the material to harden",
      "it will prevent the material from hardening",
      "the translucency will be diminished",
      "polymerization will be delayed" ],
    answer: "it will cause the material to harden"
  },
  
  { // question 37
    question: "Which the following statements is false as it relates to the acid etching of enamel for a composite restoration?",
    options: [
      "The acid-etching agent forms a mechanical bond with the enamel.",
      "The acid-etching agent is flooded onto the surface and rubbed vigorously.",
      "The material is generally applied with special applicators provided by the manufacturer.",
      "The acid-etching agent is rinsed from the tooth after recommended time to stop the etching process." ],
    answer: "The acid-etching agent is flooded onto the surface and rubbed vigorously."
  },
  
  { // question 38
    question: "When cleaning a dental handpiece, it is important to:",
    options: [
      "follow the handpiece manufacturer's directions thoroughly",
      "follow the sterilizer manufacturer's directions thoroughly",
      "always lubricate the handpiece prior to sterilization",
      "always lubricate the handpiece after sterilization" ],
    answer: "follow the handpiece manufacturer's directions thoroughly"
  },
  
  { // question 39
    question: "Which of the following rotary instruments would cut faster and most efficiently?",
    options: [
      "tungsten carbide bur",
      "stainless steel bur",
      "diamond stone",
      "green stone" ],
    answer: "diamond stone"
  },  
  
  { // question 40
    question: "Which classification(s) of motions should the dentist and the dental assistant eliminate to increase productivity and decrease stress and body fatigue?",
    options: [
      "Class 1",
      "Class II",
      "Class III",
      "Classes IV and V" ],
    answer: "Classes IV and V"
  },
  
  { // question 41
    question: "Which of the following conditions is not a potential medical contraindication to nitrous oxide?",
    options: [
      "nasal obstruction",
      "emphysema and multiple sclerosis",
      "emotional instability",
      "age" ],
    answer: "age"
  },
  
  { // question 42
    question: "What substance is added to a local anesthetic agent to slow down the intake of the agent and increase the duration of action?",
    options: [
      "sodium chloride",
      "a vasoconstrictor",
      "an amide",
      "an ester" ],
    answer: "a vasoconstrictor"
  },
  
  { // question 43
    question: "The type of anesthesia achieved by injecting the anesthetic solution directly into the tissue at the site of the dental procedure is known as _____.",
    options: [
      "inferior alveolar nerve block anesthesia",
      "block anesthesia",
      "infiltration anesthesia",
      "incisive nerve block" ],
    answer: "infiltration anesthesia"
  },
  
  { // question 44
    question: "General anesthesia is most safely administered in a(n):",
    options: [
      "general dentist's office",
      "oral surgeon's office",
      "hospital",
      "periodontist's office" ],
    answer: "hospital"
  },
  
  { // question 45
    question: "An orthodontic positioner is designed to:",
    options: [
      "move the teeth",
      "retain the teeth in their desired position",
      "reposition the teeth during orthodontic treatment",
      "both a and c" ],
    answer: "retain the teeth in their desired position"
  },
  
  { // question 46
    question: "Which of these would not be a choice of instrument to place gingival retraction cord?",
    options: [
      "explorer",
      "cord packing instrument",
      "blunt end of a plastic instrument" ],
    answer: "explorer"
  },
  
  { // question 47
    question: "From the photograph below, what is the procedure for which this tray would be used?",
    options: [
      "preparation for a cast restoration",
      "cementation of a cast restoration",
      "placement of brackets",
      "placement of separators" ],
    answer: "cementation of a cast restoration",
    imageKey: "question47"
  },
  
  { // question 48
    question: "The instruments shown below from left to right are:",
    options: [
      "three-pronged pliers, posterior band remover, ligature pin, ligature cutter",
      "Howe pliers, wire bending pliers, ligature tying pliers",
      "bird beak pliers, contouring pliers, Weingart utility pliers",
      "bird beak pliers, Howe pliers, wire bending pliers" ],
    answer: "Howe pliers, wire bending pliers, ligature tying pliers",
    imageKey: "question48"
  },
  
  { // question 49
    question: "To control bleeding after a surgical procedure, the patient should be instructed to do all of the following except _____.",
    options: [
      "Bite on a folded sterile 2 X 2 gauze for at least 30 minutes after the procedure is completed.",
      "If bleeding continues and does not stop, call the dental office.",
      "Restrict strenuous work or physical activity for that day.",
      "Rinse vigorously after 6 hours." ],
    answer: "Rinse vigorously after 6 hours."
  },
  
  { // question 50
    question: "What is the endodontic test in which the dentist applies pressure to the mucosa above the apex of the root and notes any sensitivity or swelling?",
    options: [
      "percussion",
      "palpation",
      "cold",
      "electric pulp vitality" ],
    answer: "palpation"
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

export default function Test2Screen() {
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
