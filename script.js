const translations = {
  fr: {
    siteTitle: "Mon Portfolio",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navContact: "Contact",
    heroTitle: "Salut, je suis Almo Lafont Gerik Makoumba Moumbouilou",
    heroSubtitle: "Développeur Web passionné, je crée des sites modernes et performants.",
    aboutTitle: "À propos de moi",
    aboutText: "Je suis développeur web spécialisé en HTML, CSS, JavaScript et frameworks modernes. J’aime concevoir des interfaces élégantes et fonctionnelles.",
    skillsTitle: "Compétences",
    skill1: "HTML5 / CSS3",
    skill2: "JavaScript",
    skill3: "React",
    skill4: "Node.js",
    skill5: "Base de données (MySQL)",
    projectsTitle: "Mes Projets",
    project1Title: "Projet 1",
    project1Text: "Création d’un chatbot appelé Hubble, qui répond aux questions sur l’astronomie côté back-end, avec une logique conditionnelle en JavaScript (projet de formation).",
    project2Title: "Projet 2",
    project2Text: "Création d’une application web de météo côté back-end, avec gestion de la traduction du site en français (projet de formation).",
    project3Title: "Projet 3",
    project3Text: "Création de DAG et utilisation de REDCap (stage).",
    contactTitle: "Contact",
    contactText: "Tu veux collaborer avec moi ? N’hésite pas à me contacter :",
    formName: "Nom",
    formEmail: "Email",
    formMessage: "Votre message",
    formSubmit: "Envoyer",
    footerText: "© 2025 Mon Portfolio | Développeur Web"
  },
  it: {
    siteTitle: "Il Mio Portfolio",
    navAbout: "Chi sono",
    navSkills: "Competenze",
    navProjects: "Progetti",
    navContact: "Contatto",
    heroTitle: "Ciao, sono Almo Lafont Gerik Makoumba Moumbouilou",
    heroSubtitle: "Sviluppatore Web appassionato, creo siti moderni e performanti.",
    aboutTitle: "Chi sono",
    aboutText: "Sono uno sviluppatore web specializzato in HTML, CSS, JavaScript e framework moderni. Amo progettare interfacce eleganti e funzionali.",
    skillsTitle: "Competenze",
    skill1: "HTML5 / CSS3",
    skill2: "JavaScript (ES6+)",
    skill3: "React / Vue.js",
    skill4: "Bootstrap",
    skill5: "Database (MySQL, MongoDB)",
    projectsTitle: "I miei Progetti",
    project1Title: "Progetto 1",
    project1Text: "Creazione di un chatbot chiamato Hubble, che risponde alle domande sull’astronomia lato back-end, con una logica condizionale in JavaScript (progetto formativo).",
    project2Title: "Progetto 2",
    project2Text: "Creazione di un’applicazione web di meteo lato back-end, con la gestione della traduzione del sito in francese (progetto formativo).",
    project3Title: "Progetto 3",
    project3Text: "Creazione di DAG e utilizzo di REDCap (tirocinio).",
    contactTitle: "Contatto",
    contactText: "Vuoi collaborare con me? Non esitare a contattarmi:",
    formName: "Nome",
    formEmail: "Email",
    formMessage: "Il tuo messaggio",
    formSubmit: "Invia",
    footerText: "© 2025 Il Mio Portfolio | Sviluppatore Web"
  }
};

function setLanguage(lang) {
  document.getElementById("site-title").textContent = translations[lang].siteTitle;
  document.getElementById("nav-about").textContent = translations[lang].navAbout;
  document.getElementById("nav-skills").textContent = translations[lang].navSkills;
  document.getElementById("nav-projects").textContent = translations[lang].navProjects;
  document.getElementById("nav-contact").textContent = translations[lang].navContact;
  document.getElementById("hero-title").textContent = translations[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent = translations[lang].heroSubtitle;
  document.getElementById("about-title").textContent = translations[lang].aboutTitle;
  document.getElementById("about-text").textContent = translations[lang].aboutText;
  document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
  document.getElementById("skill1").textContent = translations[lang].skill1;
  document.getElementById("skill2").textContent = translations[lang].skill2;
  document.getElementById("skill3").textContent = translations[lang].skill3;
  document.getElementById("skill4").textContent = translations[lang].skill4;
  document.getElementById("skill5").textContent = translations[lang].skill5;
  document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
  document.getElementById("project1-title").textContent = translations[lang].project1Title;
  document.getElementById("project1-text").textContent = translations[lang].project1Text;
  document.getElementById("project2-title").textContent = translations[lang].project2Title;
  document.getElementById("project2-text").textContent = translations[lang].project2Text;
  document.getElementById("project3-title").textContent = translations[lang].project3Title;
  document.getElementById("project3-text").textContent = translations[lang].project3Text;
  document.getElementById("contact-title").textContent = translations[lang].contactTitle;
  document.getElementById("contact-text").textContent = translations[lang].contactText;
  document.getElementById("form-name").placeholder = translations[lang].formName;
  document.getElementById("form-email").placeholder = translations[lang].formEmail;
  document.getElementById("form-message").placeholder = translations[lang].formMessage;
  document.getElementById("form-submit").textContent = translations[lang].formSubmit;
  document.getElementById("footer-text").textContent = translations[lang].footerText;
}

document.getElementById("language-switcher").addEventListener("change", function() {
  setLanguage(this.value);
});

// Définir la langue par défaut (FR)
setLanguage("it");

// Gestion formulaire
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci pour votre message ! Je vous répondrai bientôt.");
});
