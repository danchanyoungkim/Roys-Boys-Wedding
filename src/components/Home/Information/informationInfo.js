import RS from "../../../images/ROYSHARON.jpeg";
import reception from "../../../images/recept.jpg";
import grooms from "../../../images/groomsmen.jpeg";
import intro from "../../../images/Intro.jpg";
import rehearsal from "../../../images/rehearsal.jpg";
import event from "../../../images/events.jpg"

import rehearsalPDF from "../../../files/REHEARSAL.pdf"
import weddingPDF from "../../../files/WEDDING.pdf"
import receptionPDF from "../../../files/RECEPTION.pdf"
import bmgmPDF from "../../../files/BMGM.pdf"

export const informationInfo = [
    {
        id: 0,
        event: "Wedding Rehearsal Details",
        eventImg: {
            img: rehearsal,
            bkgColor: "#D9C7C3"
        },
        location: "Des Plaines, IL",
        date: "Friday, July 29th, 2022, 5:00 P.M.",
        details: [
            "3:30 pm - 4:30 pm",
            "Korean Philippi Presbyterian Church",
            "1969 East Touhy Ave Des Plaines, IL 60018",
            "Semi-Formal Attire",
            "REQUIRED FOR BEST MEN & GROOMSMEN"
        ],
        extension: rehearsalPDF
    },
    {
        id: 1,
        event: "Roy and Sharon's Wedding",
        eventImg: {
            img: RS,
            bkgColor: "#2E3O47"
        },
        location: "Des Plaines, IL",
        date: "Saturday, July 30th, 2022, 3:30 P.M.",
        details: [
            "3:30 pm - 4:30 pm",
            "Korean Philippi Presbyterian Church",
            "1969 East Touhy Ave Des Plaines, IL 60018",
            "Formal Attire"
        ],
        extension: weddingPDF
    },
    {
        id: 2,
        event: "Cocktail & Reception",
        eventImg: {
            img: reception,
            bkgColor: "#707766"
        },
        location: "Mt. Prospect, IL",
        date: "Saturday, July 30th, 2022, 5:00 P.M.",
        details: [
            "5:00 pm - 11:00 pm",
            "Old Orchard Country Club",
            "700 West Rand Rd Mount Prospect, IL 60056",
            "Semi-Formal/Cocktail Attire"

        ],
        extension: receptionPDF
    },
    {
        id: 3,
        event: "Best Men/Groomsmen Details",
        eventImg: {
            img: grooms,
            bkgColor: "#474044"
        },
        location: "Please Read",
        date: "If Best Men & Groomsmen",
        details: [
            "Please wear:",
            "Black Suit",
            "White Shirt",
            "Golden Ties (Provided)",
            "Black Shoes"
        ],
        extension: bmgmPDF
    },
    {
        id: 4,
        event: "Men Guests Details",
        eventImg: {
            img: intro,
            bkgColor: "#D9C7C3"
        },
        location: "Please Read",
        date: "If Men Guests",
        details: [
            "Please wear:",
            "Formal Attire",
            "Advice:",
            "Coordinate with each other about carpool & attires"
        ],
        extension: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 5,
        event: "Other Events",
        eventImg: {
            img: event,
            bkgColor: "#474044"
        },
        location: "Smaller Events",
        date: "in celebration of Roy & Sharon",
        details: [
            "Basketball Runs",
            "Bachelor Party?",
            "Currently work in progress",
            "TBD"
        ],
        extension: "https://op-rd.herokuapp.com/"
    }
]