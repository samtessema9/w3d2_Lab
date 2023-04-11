// #1

let movie = {
    name: "Titanic",
    releaseYear: 1997,
    director: "James Cameron",
    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    starActor: {
        name: "Leonardo Dicaprio",
        age: 5,
        born: 1889,
        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    },
    budgetInMillions: 200
}

// Function to access and change the actors age property
const changeAge = (movie, newAge) => {
    movie.starActor.age = newAge;
}

changeAge(movie, 48);

// Access the star actor’s born property and change the value to 1989.
const changeBirthYear = (movie, newBirthYear) => {
    movie.starActor.born = newBirthYear;
}

changeBirthYear(movie, 1989);

// Add a new property to the starActor object called isPopular and set its value to true.
const isPopular = (movie, bool) => {
    movie.starActor.isPopular = bool;
}

isPopular(movie, true);

// Add a new property to the movie object called isGoodMovie with a value of undefined.
const isGoodMovie = (movie, bool) => {
    movie.isGoodMovie = bool;
}

isGoodMovie(movie, true);

// Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.
movie.isGoodMovie = movie.actors.includes('Tom Cruise');


// #2

let cohortFour = {
    classSize: 5,
    instructor: {
        name: "Fred",
        age: 40,
        completedCohortIds: [3, 77, 45, 23],
        email: "fred@fred.com",
        assistant: {
            name: "Brad",
            age: 38,
            email: "Brad@brad.com"
        }
    },
    classGrades: [99, 100, 89, 88, 95]
}

// Check if the class size is > 10
const largeClass = (cohort) => {
    return cohort.classSize > 10;
}

console.log(largeClass(cohortFour));

// Check if the instructor has completed more than 2 cohorts.
const experiencedInstructor = (cohort) => {
    return cohort.instructor.completedCohortIds.length > 2;
}

console.log(experiencedInstructor(cohortFour));

// Create a function called changeAssistant that will change the name, age, and email of the assistant
const changeAssistant = (cohort, assistantName, assistantAge, assistantEmail) => {
    cohort.instructor.assistant.name = assistantName;
    cohort.instructor.assistant.age = assistantAge;
    cohort.instructor.assistant.email = assistantEmail;

    // another way to do this
    // cohort.instructor.assistant = {
    //     name: assistantName,
    //     age: assistantAge,
    //     email: assistantEmail
    // }
}

changeAssistant(cohortFour, "will", 35, "will@will.com");

// Loop through the completedCohortIds array and check if Fred completed cohort 55
let completedCohort55 = cohortFour.instructor.completedCohortIds.includes(55);

// Loop through the classGrades and check if the average grade is > 90
const gradesAbove90 = (cohort) => {
    return cohort.classGrades.reduce((a, b) => a + b) / cohort.classGrades.length > 90;
}

console.log(gradesAbove90(cohortFour));