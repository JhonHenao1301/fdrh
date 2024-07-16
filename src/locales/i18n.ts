import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home_msg1: "Main page",
      home_msg2: "Admin page",
      home_msg3: "Application page",
      application_msg1: "Staff development and training",
      application_msg2:
        "The Alliance of Bioversity International and CIAT, recognizes that its staff are fundamental to its success. As a research organization, it is essential that the Alliance promotes a strong learning culture in which all employees can develop and learn the competencies and skills required to perform their jobs safely at all times, reach their full potential and meet the evolving needs of the organization.",
      application_msg3:
        "One way to promote this culture is to support training and development processes.",
      application_msg4:
        "This is the call to receive requests for education support for higher education, you can find below he eligibility criteria, the steps to submit sour request and the Education Support Policy.",
      application_msg5: "Eligibility",
      application_msg6:
        "At least a year's tenure within the organization by the time the academic period for which they are requesting support begins.",
      application_msg7:
        "'Effective' or 'highly effective' performance rating in the last year (for staff who joined the Alliance on or before June 30 of the previous year).",
      application_msg8: "Does not have current disciplinary action.",
      application_msg9:
        "Qualifications related to the employee's role, career development, areas of work and objectives, or the Alliance's strategic plans.",
      application_msg10: "To submit your request",
      application_msg11:
        "Have available the information related to the training such as name of the institution, costs, dates, etc. Please take into account that the call cover all year (first and second semester).",
      application_msg12:
        "Review the Education Support policy, where you can find eligibility criteria and the process.",
      application_msg13:
        "Enter your Alliance ID number on the box and click 'Enter'.",
      application_msg14:
        "Fill out the online Education Support form and send your request (PDF or physical format) endorsed by your supervisor to Adriana Cardona Adriana-cardona@cgiar.org.",
      application_msg15: "Employee ID Number",
      application_msg16: "Enter",
      application_msg17: "Clear",
      application_msg18: "Introduce a valid value",
      application_profile_msg1: "Requester information",
      application_profile_msg2: "Name:",
      application_profile_msg3: "Resource ID:",
      application_profile_msg4: "Job title:",
      application_profile_msg5: "Department or unit:",
      application_profile_msg6: "Office:",
      application_profile_msg7: "Duty post:",
      application_profile_msg8: "Supervisor:",
      application_profile_msg9: "Start date:",
      application_profile_msg10: "Performance management rating (last year):",
      application_2_msg1: "Education level",
      application_2_msg2: "Undergraduate",
      application_2_msg3: "Professional Certificate/Specializations",
      application_2_msg4: "Master",
      application_2_msg5: "PhD",
      application_2_msg6: "Next",
      application_3_msg1: "Education program information",
      application_3_msg2: "Academic program title:",
      application_3_msg3: "Education level:",
      application_3_msg4:
        "How is this connected to the organization and your area's objectives",
      application_3_msg5: "Modality:",
      application_3_msg6: "Face to face",
      application_3_msg7: "Mix",
      application_3_msg8: "Online",
      application_3_msg9: "University/Academic Institution name:",
      application_3_msg10: "Period for which it is required:",
      application_3_msg11:
        "Academic Program Duration (Total Number of academic periods: semesters, modules, etc.):",
      application_3_msg12: "Semesters",
      application_3_msg13: "Periods",
      application_3_msg14: "Modules",
      application_3_msg15: "Periods",
      application_3_msg16:
        "Number of academic periods to carry out during this year:",
      application_3_msg17:
        "Study leave (paid time off to complete the course):",
      application_3_msg18: "Current status:",
      application_3_msg19: "",
    },
  },
  es: {
    translation: {
      home_msg1: "Página principal",
      home_msg2: "Página de administración",
      home_msg3: "Página de aplicación",
      application_msg1: "Solicitud de apoyo para capacitación",
      application_msg2:
        "La Alianza de Bioversity Internacional y el CIAT, reconoce que su personal es fundamental para su éxito. Como organización de investigación, es fundamental que la Alianza promueva una sólida cultura de aprendizaje en la que todos los empleados puedan desarrollar y aprender las competencias y habilidades necesarias para realizar su trabajo de manera segura en todo momento, alcanzar su máximo potencial y satisfacer las necesidades cambiantes de la organización.",
      application_msg3:
        "Una manera de promover dicha cultura es el apoyo a los procesos de capacitación y desarrollo.",
      application_msg4:
        "Esta es la convocatoria para recibir solicitudes de apoyo educativo para educación superior, a continuación puede encontrar los criterios de elegibilidad, los pasos para presentar una solicitud y la Política de Apoyo Educativo.",
      application_msg5: "Requisitos generales:",
      application_msg6:
        "Tener al menos un año vinculado con la Organización para el momento en que inicia el período académico para el cual pedirá el apoyo.",
      application_msg7:
        "Tener una calificación de 'efectivo' o 'altamente efectivo' en la gestión del desempeño del año pasado (empleados que ingresaron en o antes del 30 de junio del año anterior).",
      application_msg8: "No tener acciones disciplinarias.",
      application_msg9:
        "Programas educativos relacionados con el rol, desarrollo profesional del empleado o el área de trabajo, objetivos o estrategia de la Alianza.",
      application_msg10: "Para realizar su solicitud:",
      application_msg11:
        "Tener disponible la información relacionada con la capacitación como nombre de la Institución, costos, fechas, etc. Favor de tomar en cuenta que la convocatoria cubre todo el año (primer y segundo semestre).",
      application_msg12:
        "Lee la Política de apoyo educativo, donde podrás encontrar los criterios de eligibilidad y el proceso",
      application_msg13:
        "Ingrese su número de identificación de la Alianza en el cuadro y haga clic en 'Siguiente'",
      application_msg14:
        "Diligencia el formulario en línea de Apoyo Educativo y envía tu solicitud (PDF o formato físico) avalada por tu supervisor a Adriana Cardona Adriana-cardona@cgiar.org",
      application_msg15: "Número de carnet del Empleado",
      application_msg16: "Siguiente",
      application_msg17: "Limpiar",
      application_msg18: "Introduce un valor válido",
      application_profile_msg1: "Información del solicitante",
      application_profile_msg2: "Nombre:",
      application_profile_msg3: "Carnet:",
      application_profile_msg4: "Posición:",
      application_profile_msg5: "Departamento o unidad:",
      application_profile_msg6: "Oficina:",
      application_profile_msg7: "Ubicación:",
      application_profile_msg8: "Supervisor:",
      application_profile_msg9: "Fecha de inicio:",
      application_profile_msg10:
        "Resultado de la gestión de desempeño (año pasado):",
      application_2_msg1: "Nivel educativo",
      application_2_msg2: "Carrera Universitaria",
      application_2_msg3: "Especialización",
      application_2_msg4: "Maestría",
      application_2_msg5: "Doctorado",
      application_2_msg6: "Siguiente",
      application_3_msg1: "Información del programa educativo",
      application_3_msg2: "Programa Académico",
      application_3_msg3: "Nivel educativo:",
      application_3_msg4:
        "Cómo se relaciona este estudio con los objetivos de la Organización y de su área/unidad?:",
      application_3_msg5: "Modalidad",
      application_3_msg6: "Presencial",
      application_3_msg7: "Semi-presencial",
      application_3_msg8: "Virtual",
      application_3_msg9: "Nombre de la Universidad o Institución académica:",
      application_3_msg10: "Periodo por el que se solicita este apoyo:",
      application_3_msg11:
        "Duración total del programa académico (Número total de períodos académicos: semestres, módulos, etc.):",
      application_3_msg12: "Semestres",
      application_3_msg13: "Períodos",
      application_3_msg14: "Módulos",
      application_3_msg15:
        "Número de periodos académicos a realizar durante este año:",
      application_3_msg16:
        "Licencia de estudio (tiempo libre pagado para completar el curso):",
      application_3_msg17: "Estado actual:",
      application_3_msg18: "",
      application_3_msg19: "",
      application_3_msg20: "",
      application_3_msg21:
        "Fecha de inicio del programa académico para este año (puede ser estimado):",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
