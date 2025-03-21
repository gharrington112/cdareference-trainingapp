import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ReactNode } from 'react';

export default function TabTwoScreen() {

  // Need to find better manner for creating table besides a sea of ThemedText's .... line 313
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}

      headerImage={
        <Image
          source={require('@/assets/images/labimage.png')} // edit this image
          style = {styles.image}
        /> 
      }>

       <ThemedView style = {styles.titleContainer}>
          <ThemedText type = "title">Commonly Used Drugs in Dentistry</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
          <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Antibiotic Therapy</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
          <Collapsible title = "Amoxicillin">
            <ThemedText>(Up to 21 Lbs)</ThemedText>
            {["RX: Amoxicillin 125 mg / 5 ml", "Disp: 150 ml", "Sig: Take 1 tsp. TID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(22 - 31 Lbs)</ThemedText>
            {["RX: Amoxicillin 125 mg / 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(32 - 42 Lbs)</ThemedText>
            {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 150 ml", "Sig: take 1 tsp. TID Until Gone"].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(43 - 62 Lbs)</ThemedText>
            {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(Over 62 Lbs)</ThemedText>
            {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 300 ml", "Sig: take 2 tsp. TID Until Gone"].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>OR</ThemedText>
            {["RX: Amoxicillin 500 mg tablets", "Disp: 30 tablets", "Sig: take 1 tab TID Until Gone \n \n \n ** Avail. in 125/250 mg chewing tab"].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))}
          </Collapsible>
        </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Pen VK">
          <ThemedText>(Up to 22 Lbs)</ThemedText>
            {["RX: Pen VK 125 mg / 5 ml", "Disp: 200 ml", "Sig: Take 1 tsp. QID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(23 - 33 Lbs)</ThemedText>
            {["RX: Pen VK 125 mg / 5 ml", "Disp: 300 ml", "Sig: Take 1.5 tsp QID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(34 - 44 Lbs)</ThemedText>
            {["RX: Pen VK 250 mg / 5 ml", "Disp: 200 ml", "Sig: Take 1 tsp. QID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(45 - 66 Lbs)</ThemedText>
            {["RX: Pen VK 250 mg / 5 ml", "Disp: 300 ml", "Sig: Take 1.5 tsp. QID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
            <ThemedText>(Over 66 Lbs)</ThemedText>
            {["RX: Pen VK 500 mg tablets", "Disp: 40 tablets", "Sig: Take 1 tab TID Until Gone"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
          </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
         <ThemedText type = 'subtitle' style = {{fontSize: 16}}>If Patient Allergic to Penicillin</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
         <Collapsible title = "Clindamycin">
           <ThemedText>(Up to 18 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 75 ml", "Sig: Take 1/2 tsp. TID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
           <ThemedText>(19 - 33 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 150 ml", "Sig: Take 1 tsp. TID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
           <ThemedText>(34 - 49 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 225 ml", "Sig: Take 1.5 tsp. TID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
           <ThemedText>(50 - 67 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 300 ml", "Sig: Take 2 tsp. TID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
           <ThemedText>(68 - 99 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 450 ml", "Sig: Take 3 tsp. TID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
           <ThemedText>(Over 99 Lbs)</ThemedText>
           {["RX: Pediatric Cleocin 300 mg", "Disp: 40 capsules", "Sig: Take 1 cap QID Until Gone"].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
         <ThemedText type = 'subtitle' style = {{fontSize: 26}}>SBE Prophylaxis</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Amoxicillin">
          <ThemedText>Less than 33 Lbs</ThemedText>
          {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 15 ml", "Sig: Take 3 tsp. 1 hr Prior to Appt."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>Less than 33 Lbs</ThemedText>
          {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 40 ml", "Sig: Take 6 tsp. 1 hr Prior to Appt."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>Less than 33 Lbs</ThemedText>
          {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 40 ml", "Sig: Take 8 tsp."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>OR</ThemedText>
          {["RX: Amoxicillin 500 mg", "Disp: 4 tabs", "Sig: Take 4 tab 1 hr Prior to Appt."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 16}}>If Patient Allergic to Penicillin</ThemedText>
       </ThemedView>

       <ThemedView style= {styles.contentContainer}>
        <Collapsible title = "Clindamycin">
          <ThemedText>(Less than 24 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 15 ml", "Sig: Take 3 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(24 - 33 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 20 ml", "Sig: Take 4 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(34 - 42 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 25 ml", "Sig: Take 5 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(43 - 49 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 30 ml", "Sig: Take 6 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(50 - 57 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 35 ml", "Sig: Take 7 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(Over 57 Lbs)</ThemedText>
          {["RX: Cleocin 75 mg / 5 ml", "Disp: 40 ml", "Sig: Take 8 tsp. 1 hr Prior to Appt."].map((directions, index) => 
             (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Fluoride Therapy</ThemedText>
       </ThemedView>

       <ThemedView style= {styles.contentContainer}>
        <Collapsible title = "Topical">
          {["RX: Prevident 5000 (1% NAF)", "Disp: One 2 oz Tube"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>If Over 16 Yrs</ThemedText>
          {["Sig: Apply thin ribbon on toothbrush after regular brushing. Brush 1 min then expectorate. Refrain from eating, drinking, or rinsing for 30 mins."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>6 - 16 Yrs</ThemedText>
          {["Sig: Same as above, except after expectorating rinse with water."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>Under 6 Yrs</ThemedText>
          {["DO NOT USE"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Rinses">
          {["RX: Prevident Dental Rinse", "Disp: One Bottle", "Sig (6 Yrs or Older) Rinse with 2 tsp. for 1 min then expectorate 1 time a day"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Analgesics</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Tylenol with Codeine Elixir">
          {["RX: Tylenol with Codeine Elixir", "Disp: 100 ml", "Sig: (3 - 6 Yrs) \n 1 tsp. 3 - 4  times a day \n (7 - 12 Yrs) \n 2 tsp. 3 - 4 times a day \n (Adult) \n 1 tbsp every 4 hrs prn pain"].map((directions, index) => 
              (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Motrin">
          {["RX: Motrin 400 mg", "Disp: 20 tabs", "Sig: 1 - 2 tabs Q6 hr prn pain"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Tylenol #3">
          {["RX: Tylenol #3", "Disp: 20 tabs", "Sig: 1 - 2 tabs Q4 hr prn pain"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Vicodin">
          {["RX: Vicodin", "Disp: 12 tabs", "Sig: 1 - 2 tabs Q6 hr prn pain"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Topical Oral Anesthetics</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Benadryl Elixir">
          {["RX: Benadryl Elixir (12.5 mg / 5 ml", "Disp: 4 fl oz. ea; mix equal parts", "Sig: Rinse with 1 tbsp for 2 min a.c. and prn pain"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Licocaine">
          {["RX: Licocaine HCL 2%", "Disp: 4 fluid oz", "Sig: Rinse with 1 tsp. a.c. and prn pain. Expectorate after rinse."].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Antifungals</ThemedText>
       </ThemedView>       
       
       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Nystatin">
          <ThemedText>(Infants Up to 3 Months)</ThemedText>
          {["RX: Nystatin Oral Susp 100 k / ml", "Disp: 60 ml", "Sig: Take 1 ml QID until gone"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(Children Older Than 3 Months)</ThemedText>
          {["RX: Nystatin Oral Susp 100 k / ml", "Disp: 120 ml", "Sig: Take 2 ml QID until gone"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Antivirals</ThemedText>
       </ThemedView> 

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Acyclovir">
          <ThemedText>(Infants Up to 3 Months)</ThemedText>
          {["RX: Acyclovir capsules 200 mg", "Disp: 25 ml", "Sig: Take 1 cap 5 times a day for 5 days"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(Children Older Than 3 Months)</ThemedText>
          {["RX: Acyclovir ointment", "Disp: 15 g", "Sig: Apply to oral lesions with cotton tip 6 times a day"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Allergic Rxn Medications</ThemedText>
       </ThemedView> 

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Benadryl (low / mod reaction)">
          <ThemedText>(2 - 6 Yrs)</ThemedText>
          {["Dose: 6.25 mg PO q6 h"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(6 - 12 Yrs)</ThemedText>
          {["Dose: 12.5 - 25 mg PO q6 h"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          <ThemedText>(Older than 12 Yrs)</ThemedText>
          {["Dose: 25 - 50 mg PO q6 h"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Epinephrine (anaphylatic / severe asthma attacks)">
          {["Pedo Dose: 0.01 mg / kg IM x 1"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
          {["Adult Dose: 0.01 mg SC q10 - 15 ml"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Corticosteroids</ThemedText>
       </ThemedView> 

       <ThemedView style = {styles.italicContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 22}}>Adjunctive treatment for and relief of symptoms
           assoicated with oral inflammatory & ulcerative lesions</ThemedText>
       </ThemedView> 

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Rinse">
          {["RX: Dexamethasone elixir", "100 ml bottle", "Sig: Rinse with 1 tsp. QID for 2 min and expectorate"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Topical">
        {["RX: Kenalog in Orabase 0.1%", "5 g tube", "Sig: Apply to ulcerated area pc and hs"].map((directions, index) => 
            (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>

       <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Max Pediatric Anesthetic {"\n"} Dosage for 2% Lidocaine</ThemedText>
       </ThemedView>

       <ThemedView style = {styles.contentContainer}>
        <Collapsible title= "Dosage Table"> 
        <ThemedText>Pt. Wt. {"\t"} Max Dose {"\t"} Max Carpules {"\n"}</ThemedText>
        <ThemedText>(Lbs) {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} (Mg) {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} (ea) {"\n"}</ThemedText>
        <ThemedText>15 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 30 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 0.83 {"\n"}</ThemedText>
        <ThemedText>20 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 40 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 1.11 {"\n"}</ThemedText>
        <ThemedText>25 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 50 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 1.39 {"\n"}</ThemedText>
        <ThemedText>30 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 60 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 1.67 {"\n"}</ThemedText>
        <ThemedText>35 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 70 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 1.94 {"\n"}</ThemedText>
        <ThemedText>40 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 80 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 2.22 {"\n"}</ThemedText>
        <ThemedText>45 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 90 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 2.5 {"\n"}</ThemedText>
        <ThemedText>50 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 100 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 2.78 {"\n"}</ThemedText>
        <ThemedText>55 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 110 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 3.06 {"\n"}</ThemedText>
        <ThemedText>60 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 120 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 3.33 {"\n"}</ThemedText>
        <ThemedText>65 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 130 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 3.61 {"\n"}</ThemedText>
        <ThemedText>70 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 140 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 3.89 {"\n"}</ThemedText>
        <ThemedText>75 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 150 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4.17 {"\n"}</ThemedText>
        <ThemedText>80 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 160 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4.44 {"\n"}</ThemedText>
        <ThemedText>85 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 170 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4.72 {"\n"}</ThemedText>
        <ThemedText>90 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 160 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4.44 {"\n"}</ThemedText>
        <ThemedText>95 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 190 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 5.28 {"\n"}</ThemedText>
        <ThemedText>100 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 200 {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 5.56 {"\n"}</ThemedText>

        
        </Collapsible>
       </ThemedView>

    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  italicContainer: {
    flexDirection: 'row',
    gap: 5,
    fontStyle: 'italic',
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  image: {
    height: 178,
    width: 190,
    bottom: 0,
    left: 5,
    position: 'absolute',
  },
});
