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
  question88: require('@/assets/images/question88.png'),
};

const questions = [
  { // question 76
    question: "A posterior tooth with a deep preparation may require a base that is designed to prepare pulpal defense by functioning as a(n):",
    options: [
      "final restoration",
      "protective base",
      "insulating base",
      "sedative base"
    ],
    answer: "insulating base"
  },
  
  { // question 77
    question: "A patient has a fractured amalgam on 29DO. Time in the doctor's schedule does not permit placement of a permanent restoration. Which of the following statements is correct as to the type of dental cement and the consistency that would be used in this clinical situation?",
    options: [
      "temporary cement to a secondary consistency",
      "final cement to a secondary consistency",
      "temporary cement to a primary consistency",
      "final cement to a primary consistency"
    ],
    answer: "temporary cement to a secondary consistency"
  },

  { // question 78
    question: "An alginate impression has been taken to prepare a set of diagnostic models. Which of the following statements is false as it relates to handling the impression? Alginate impressions _____.",
    options: [
      "should be stored for as short a period as possible",
      "expand when stored in water",
      "can be stored in 100% relative humidity without serious dimensional changes for up to 24 hours",
      "shrink when stored in air with low humidity"
    ],
    answer: "shrink when stored in air with low humidity"
  },
  
  { // question 79
    question: "IRM (intermediate restorative material) is used primarily for:",
    options: [
      "final restorative for primary molars",
      "provisional restoration",
      "cementing crowns bridges and onlays",
      "seating an implant"
    ],
    answer: "provisional restoration"
  },
  
  { // quesiton 80
    question: "Dry mouth is also known as _____.",
    options: [
      "periodontal disease",
      "blastomia",
      "xerostomia",
      "glossitis"
    ],
    answer: "xerostomia"
  },
  
  { // question 81
    question: "_____ is more prominent in older adults who have experienced gingival recession.",
    options: [
      "Interproximal dental decay",
      "Cervical caries",
      "Incisal caries",
      "Generalized dental decay"
    ],
    answer: "Cervical caries"
  },
  
  { // question 82
    question: "Which food can be compared to a reversible hydrocolloid?",
    options: [
      "potato chips",
      "salad dressing",
      "ice cream",
      "ketchup"
    ],
    answer: "ice cream"
  },
  
  { // question 83
    question: "Which of the following could not be suggested as an intervention for the prevention of dental caries?",
    options: [
      "fluoride",
      "antibacterial therapy",
      "decreased ingestion of carbohydrates",
      "chewing mints"
    ],
    answer: "chewing mints"
  },
  
  { // question 84
    question: "A caries risk assessment test is used to _____.",
    options: [
      "determine the number of mutans streptococci and lactobacilli count present in the saliva",
      "determine the amount of fermentable carbohydrate present in the saliva",
      "determine the salinity of the saliva",
      "determine the level of salivary immunity"
    ],
    answer: "determine the number of mutans streptococci and lactobacilli count present in the saliva"
  },
  
  { // question 85
    question: "Inflammation of the supporting tissues of the teeth that begins with _____ can progress into the connective tissue and alveolar bone that supports the teeth and become _____.",
    options: [
      "gingivitis, glossitis",
      "periodontitis, gingivitis",
      "gingivitis, periodontitis",
      "gingivitis, gangrene"
    ],
    answer: "gingivitis, periodontitis"
  },  
  
  { // question 86
    question: "A dietary food analysis includes a diary of everything a patient consumes for:",
    options: [
      "24 hours",
      "72 hours",
      "1 week",
      "1 month"
    ],
    answer: "24 hours"
  },
  
  { // question 87
    question: "The MyPyramid is an outline of what to eat each day. Which of the following statements is the most accurate regarding a food pyramid:",
    options: [
      "All food pyramids include a base formed of dairy products.",
      "The largest portion of a vegetarian food pyramid is dairy products.",
      "Recent research has provided a food pyramid for a vegetarian diet.",
      "The food pyramid is a myth."
    ],
    answer: "Recent research has provided a food pyramid for a vegetarian diet."
  },
  
  { // question 88
    question: "From the photograph below, which of these instruments is a T-ball burnisher?",
    options: [
      "A",
      "B",
      "C"
    ],
    answer: "A",
    imageKey: "question88"
  },  
  
  { // question 89
    question: "The patient's record indicates that the status of the gingiva is bulbous, flattened, punched-out, and cratered. This statement describes the gingival _____:",
    options: [
      "color",
      "contour",
      "consistency",
      "surface texture"
    ],
    answer: "contour"
  },
  
  { // question 90
    question: "Supragingival calculus is found on the _____ of the teeth, above the margin of the _____.",
    options: [
      "cervical region, periodontal ligament",
      "clinical crowns, gingiva",
      "anatomical crowns, periodontal ligament",
      "cervical margins, apex"
    ],
    answer: "clinical crowns, gingiva"
  },  
  
  { // question 91
    question: "Subgingival calculus occurs _____ the gingival margin and can be _____ in color due to subgingival bleeding.",
    options: [
      "above, yellow",
      "below, yellow",
      "above, red",
      "below, black"
    ],
    answer: "below, black"
  },
  
  { // question 92
    question: "All of the following are types of restorations except _____",
    options: [
      "Class I",
      "Class X",
      "Class IV",
      "Class V"
    ],
    answer: "Class X"
  },
  
  { // question 93
    question: "_____ sealants _____ require mixing as they cure when they are exposed to UV light.",
    options: [
      "Chemically cured, do",
      "Light cured, do",
      "Chemically cured, do not",
      "Light cured, do not"
    ],
    answer: "Light cured, do not"
  },
  
  { // question 94
    question: "When adjusting a crown after cementation, the dentist most likely would use a _____",
    options: [
      "diamond bur",
      "FG bur",
      "stone",
      "RA bur"
    ],
    answer: "stone"
  },
  
  { // question 95
    question: "The procedure that is done to remove subgingival calculus and to remove necrotic tissue from the periodontal pocket is referred to as a _____:",
    options: [
      "root planing",
      "prophylaxis",
      "coronal polishing",
      "gingival curettage"
    ],
    answer: "gingival curettage"
  },
  
  { // question 96
    question: "The _____ provides rapid calculus removal and reduces operator hand fatigue.",
    options: [
      "Gracey scaler",
      "sickle scaler",
      "ultrasonic scaler",
      "curette scaler"
    ],
    answer: "ultrasonic scaler"
  },
  
  { // question 97
    question: "A(n) _____ procedure is performed to remove defects and to restore normal contours in the bone.",
    options: [
      "gingivectomy",
      "gingivoplasty",
      "osseous surgery",
      "frenectomy"
    ],
    answer: "osseous surgery"
  },
  
  { // question 98
    question: "Which of the following is not a measurement used in constructing a complete denture?",
    options: [
      "protrusion",
      "lateral excursion",
      "centric relation",
      "reversion"
    ],
    answer: "reversion"
  },  
  
  { // question 99
    question: "When transferring patient records from the office to another site, the administrative assistant must do all except which of the following?",
    options: [
      "Obtain consent from the patient or legal representative.",
      "Retain the original record in the office.",
      "Transfer the entire record.",
      "Copy the radiographs and retain the originals."
    ],
    answer: "Transfer the entire record."
  },
  
  { // question 100
    question: "A new filing system for clinical charts is to be installed in your office. Which of the following filing systems would be most efficient?",
    options: [
      "open files with colored filing labels with alpha and numeric codes",
      "vertical files with tab-top labels",
      "vertical files with closed-end folders",
      "lateral files with closed-end folders"
    ],
    answer: "open files with colored filing labels with alpha and numeric codes"
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

export default function Test4Screen() {
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
