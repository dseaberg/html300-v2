/***************************************
 * Constants                           *
 ***************************************/
const defaultImageUrl = './img/headshot.jpg';
const defaultImageAlt = 'Front-facing photo of a biege dog.';
const linkedInLogoUrl = './img/linkedin.svg';
const linkedInLogoAlt = 'Logo of LinkedIn';

const employeeCards = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
];

/***************************************
 * Entry code (i.e. main())            *
 ***************************************/
buildCards(employeeCards);

/***************************************
 * Helper functions                    *
 ***************************************/

// Adds the card HTML to the page.
function buildCards(cards) {
  const cardsHtml = createCardsHtml(cards);
  const parentElement = document.querySelector('.template-hook');
  parentElement.innerHTML += cardsHtml;
}

// Creates the corresponding HTML for the given card JSON data.
function createCardsHtml(cards) {
  return cards.map(function(card) {
    return `
      <div class="employee-card">
  			<div class="card-content">
  				<div class="card-identity">
  					<img src="${defaultImageUrl}" alt="${defaultImageAlt}">
  					<p>
  						<span class="employee-name">${card.name}</span>
  						<span class="employee-title">${card.jobTitle}</span>
  					</p>
  				</div>
  				<div class="card-details">
  					<p><span>Company:</span> ${card.company}</p>
  					<p><span>Experience:</span> ${card.experience}</p>
  					<p><span>School:</span> ${card.school}</p>
  					<p><span>Major:</span> ${card.major}</p>
  					<p><span>Email:</span> ${card.email}</p>
  					<div class="card-linkedin">
  						<img src="${linkedInLogoUrl}" alt="${linkedInLogoAlt}">
  						<p>${card.linkedInUrl}<p>
  					</div>
  				</div>
  			</div>
  		</div>
    `;
  });
}
