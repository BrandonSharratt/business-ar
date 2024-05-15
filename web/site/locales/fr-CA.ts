export default {
  btn: {
    getStarted: 'Commencer',
    goHome: 'Accueil',
    goBack: 'Retourner',
    dashboard: 'Dashboard',
    sbcConnect: 'Service Connect CB',
    copy: 'Copier',
    copied: 'Copié!',
    submit: 'Soumettre',
    next: 'Suivant',
    previous: 'Précédent',
    openMainNav: 'Ouvrir le menu de Navigation Principal',
    closeMainNav: 'Fermer le menu de Navigation Principal',
    loginBCSC: 'Connectez-vous avec la Carte Service CB',
    createNewAccount: 'Créer un Nouveau Compte',
    createAccount: 'Créer un Compte',
    useThisAccount: {
      main: 'Utiliser ce Compte',
      aria: 'Utiliser le Compte, {name}'
    },
    logout: 'Se Déconnecter',
    saveAccountAndFileAr: 'Enregistrer le Compte et Déposer le Rapport Annuel',
    submitAndPay: 'Soumettre et Payer',
    accountOptions: "Menu d'options pour Compte"
  },
  currency: {
    cad: 'CAD',
    usd: 'USD'
  },
  labels: {
    note: 'Note',
    optional: 'Optionnel',
    characters: 'caractères',
    buttons: {
      back: 'Précédent',
      cancel: 'Annuler',
      fileNowNoFee: 'Déposer maintenant (sans frais)',
      reviewConfirm: 'Réviser et Confirmer',
      save: 'Sauvegarder',
      saveExit: 'Sauvegarder et Reprendre Plus Tard'
    },
    birthdate: 'Date de Naissance',
    competency: 'Compétence',
    citizenship: 'Citoyenneté',
    citizenshipPR: 'Citoyenneté/Résidence Permanente',
    emailAddress: 'Adresse e-mail',
    fullName: 'Nom Légal Complet',
    preferredName: 'Nom Préféré',
    address: 'Adresse',
    addressResidential: 'Adresse Résidentielle',
    state: 'État',
    country: 'Pays',
    line1: "Ligne d'adresse 1",
    line2: "Ligne d'adresse 2 (Facultatif)",
    city: 'Ville',
    region: 'Région (Facultatif)',
    postalCode: 'Code Postal',
    locationDescription: 'Description du Lieu (Facultatif)',
    countryOfCitizenship: {
      citizen: 'Citoyen du Canada',
      pr: 'Résident Permanent du Canada',
      others: 'Autre(s) Nationalité(s)',
      selectAll: 'Sélectionnez tous les pays dont cette personne est citoyenne.',
      placeholder: 'Pays de Citoyenneté',
      findCountry: 'Trouver un Pays',
      select: 'Sélectionner',
      selected: 'Sélectionné'
    },
    findACountry: 'Trouver un Pays',
    services: {
      bcsc: 'la Carte Service CB',
      bceid: 'BCeID',
      idir: 'IDIR'
    },
    socialInsuranceNumber: "Numéro d'assurance sociale",
    taxNumber: "Numéro d'impot",
    busName: "Nom de l'entreprise",
    corpNum: 'Numéro de constitution',
    busNum: "Numéro d'entreprise",
    arDate: 'Date du Rapport Annuel'
  },
  page: {
    notFound: {
      h1: 'Page introuvable'
    },
    home: {
      title: 'Accueil - Rapport Annuel de Service CB',
      h1: 'Déposez votre rapport annuel de la Colombie-Britannique'
    },
    createAccount: {
      title: 'Création de Compte - Rapport Annuel de Service CB',
      h1: 'Création de Compte Service CB',
      h2: 'Détails du Compte',
      form: {
        infoSection: {
          fieldSet: 'Votre Nom',
          info: "Ceci est votre nom légal qu'il apparaît sur votre carte Services CB."
        },
        accountNameSection: {
          fieldSet: 'Nom du Compte',
          accountNameInputLabel: 'Nom du Compte',
          error: {
            req: 'Veuillez entrer un nom de compte',
            min: 'Le nom du compte doit comporter au moins 2 caractères',
            unique: 'Le nom du compte doit être unique'
          }
        },
        contactDetailsSection: {
          fieldSet: 'Détails du Contact',
          phoneInputLabel: 'Numéro de téléphone',
          phoneExtInputLabel: {
            main: 'Extension (Facultatif)',
            aria: 'Extension du numéro de téléphone, Optionionnel'
          },
          emailInputLabel: 'Adresse e-mail',
          error: {
            phone: {
              req: 'Veuillez entrer un numéro de téléphone',
              invalid: 'Veuillez entrer un numéro de téléphone valide'
            },
            email: {
              req: "Veuillez entrer une adresse email s'il vous plaît",
              invalid: 'Veuillez entrer une adresse email valide'
            }
          }
        }
      }
    },
    existingAccount: {
      title: 'Choisissez un Compte Existant - Rapport Annuel de Service CB',
      h1: 'Compte Existant Trouvé',
      h2: 'Vos Comptes Existants',
      existingAccountWarning: 'Il semble que vous ayez déjà un compte avec Service Connect CB. Vous pouvez utiliser un compte existant pour continuer ou en créer un nouveau.'
    },
    missingId: {
      title: 'Autorisation Requise - Rapport Annuel de Service CB',
      h1: 'Autorisation Nécessaire'
    },
    annualReport: {
      title: 'Déposez votre rapport annuel - Rapport Annuel de Service CB',
      h1: 'Rapport Annuel {year}',
      h2: 'Rapport Annuel pour: {name}',
      form: {
        heldAgm: {
          question: "Es'ce que votre enterprise a tenu une assemblée générale annuelle?",
          opt1: 'Oui',
          opt2: "Nous n'avons pas encore tenu une AGA",
          opt3: "Nous avons voté pour ne pas tenir d'AGA"
        },
        agmDate: {
          placeholder: "Sélectionnez la date de l'assemblée générale annuelle",
          label: "Sélectionnez la date de l'assemblée générale annuelle",
          format: 'Format: {format}',
          error: 'Vous devez sélectionner une date si vous avez tenu une AGA'
        },
        certify: {
          question: 'Je certifie que toutes les informations concernant les adresses des bureaux et les directeurs actuels sont exactes.',
          error: 'Vous devez confirmer pour continuer'
        }
      },
      payError: {
        title: 'Paiement Incomplet',
        description: "Votre paiement n'a pas été finalisé, veuillez réessayer."
      }
    },
    submitted: {
      title: 'Rapport Annuel Terminé - Rapport Annuel de Service CB',
      h1: 'Rapport Annuel Terminé'
    }
  },
  widgets: {
    feeSummary: {
      title: 'Résumé des frais',
      total: 'Total des frais',
      noFee: 'Pas de frais',
      priorityFees: 'Frais prioritaires',
      futureEffectiveFees: 'Frais effectifs futurs',
      serviceFees: 'Frais de service',
      itemLabels: {
        TEST: 'This is test entry',
        REGSIGIN: 'Significant Individual Change',
        BCANN: 'Rapport Annuel CB'
      }
    }
  },
  SbcHeader: {
    title: 'Service Connect CB',
    logoBtnLabel: 'Accueil', // <img> link aria-label
    navLabel: 'Navigation principale' // <nav> aria-label
  },
  SbcFooter: {
    navLabel: 'Liens utiles', // <nav> aria-label
    home: 'Accueil',
    disclaimer: 'Clause de non-responsabilité',
    privacy: 'Confidentialité',
    ally: 'Accessibilité',
    copyright: "Droits d'auteur",
    bcApp: 'Une application en ligne CB'
  },
  SbcLogo: {
    alt: 'Logo du gouvernement de la Colombie-Britannique' // <img> alt
  },
  LocaleSelect: {
    // aria-label
    label: 'Sélectionnez une langue, langue courante: Français'
  }
}
