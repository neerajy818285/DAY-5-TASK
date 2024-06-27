//question 1
// for the given JSON iterate over all for loops
//for-in loop
var resume = {
    "Name": "Neeraj yadav",
        "Email":"neeraj818285@gmmail.com",
        "Mobile No.": "7860885824",
        "DOB": "08-10-1998",
        "Address":{
            "H.No.":"2",
            "Area" :"Vineet khand 1 Gomti Nagar",
            "City" :"lucknow",
            "State":"UP",
            "Country":"India",
            "Pincode":"226010",
        },
  
 
  "EDUCATION":[  {
    "Graduation":{
        "Course":"BTech",
        "Branch":"Computer Sccience",
        "Percentage":"65%",
        "Division" :"First Division",
        "University/College Name":"VBSPU jaunpur",

    },
    "Intermidate":{
        "Percentage":"60%",
        "School name":"KV gomti nagar lucknow",

    },
    "High School":{
        "CGPA":"6.4",
        "School name":"KV gomti nagar lucknow",
     }
}
],
      
  "LANGUAGES": {
    "language": "Hindi , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
    
  },
};
for(var i in resume){
    console.log(i,resume[i]);
}



//2nd loop
//for loop iteration
var resume = [ {
  "Name": "Neeraj yadav",
      "Email":"neeraj818285@gmmail.com",
      "Mobile No.": "7860885824",
      "DOB": "08-10-1998",
      "Address":{
          "H.No.":"2",
          "Area" :"Vineet khand 1 Gomti Nagar",
          "City" :"lucknow",
          "State":"UP",
          "Country":"India",
          "Pincode":"226010",
      },


"EDUCATION":[  {
  "Graduation":{
      "Course":"BTech",
      "Branch":"Computer Sccience",
      "Percentage":"65%",
      "Division" :"First Division",
      "University/College Name":"VBSPU jaunpur",

  },
  "Intermidate":{
      "Percentage":"60%",
      "School name":"KV gomti nagar lucknow",

  },
  "High School":{
      "CGPA":"6.4",
      "School name":"KV gomti nagar lucknow",
   }
}
],
    
"LANGUAGES": {
  "language": "Hindi , English",
},
"INTEREST": {
  "name": "Watching movie",
  "keywords": 
    "based on true storeies",
  
},

}];
for(var i = 0; i<resume.length; i++){
  console.log(resume[i]);
}


// 3.for of -loop iteration

const num = [10,20,30,40,50];

for(var newnum of num){
  console.log(newnum);
}
//output
//10
//20
//30
//40
//50

//4. for each-loop iteration

let str = [1,2,3,4,5];
str.forEach(element => {
  console.log(element)
});
//output
//1
//2
//3
//4
//5


//question 2
//2.create your own resume for JSON format
var resume = {
  
    "Name": "Neeraj yadav",
        "Email":"neeraj818285@gmmail.com",
        "Mobile No.": "7860885824",
        "DOB": "08-10-1998",
        "Address":{
            "H.No.":"2",
            "Area" :"Vineet khand 1 Gomti Nagar",
            "City" :"lucknow",
            "State":"UP",
            "Country":"India",
            "Pincode":"226010",
        },
  
 
  "EDUCATION":[  {
    "Graduation":{
        "Course":"BTech",
        "Branch":"Computer Sccience",
        "Percentage":"65%",
        "Division" :"First Division",
        "University/College Name":"VBSPU jaunpur",

    },
    "Intermidate":{
        "Percentage":"60%",
        "School name":"KV gomti nagar lucknow",

    },
    "High School":{
        "CGPA":"6.4",
        "School name":"KV gomti nagar lucknow",
     }
}
],
      
  "LANGUAGES": {
    "language": "Hindi , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
    
  },
};
console.log(resume);

//output
/*
 {
    "Name": "Neeraj yadav",
        "Email":"neeraj818285@gmmail.com",
        "Mobile No.": "7860885824",
        "DOB": "08-10-1998",
        "Address":{
            "H.No.":"2",
            "Area" :"Vineet khand 1 Gomti Nagar",
            "City" :"lucknow",
            "State":"UP",
            "Country":"India",
            "Pincode":"226010",
        },
  
 
  "EDUCATION":[  {
    "Graduation":{
        "Course":"BTech",
        "Branch":"Computer Sccience",
        "Percentage":"65%",
        "Division" :"First Division",
        "University/College Name":"VBSPU jaunpur",

    },
    "Intermidate":{
        "Percentage":"60%",
        "School name":"KV gomti nagar lucknow",

    },
    "High School":{
        "CGPA":"6.4",
        "School name":"KV gomti nagar lucknow",
     }
}
],
      
  "LANGUAGES": {
    "language": "Hindi , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
    
  },
};
*/