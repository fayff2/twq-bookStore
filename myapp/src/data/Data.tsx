

const books =[
    {
        id:'1' ,
        title:"The Water Outlaws",
        author: "S. L. Huang",
        brief :"Inspired by a classic of martial arts literature, S. L. Huang's The Water Outlaws are bandits of devastating ruthlessness, unseemly femininity, dangerous philosophies, and ungovernable gender who are ready to make history--or tear it apart.",
        img: "https://images-us.bookshop.org/ingram/9781250180421.jpg?height=500&v=v2-5224e0cdb49a9948de089e41fb85f5e9" 
    },
    {
        id:'2' ,
        title:"The Year of Second Chances",
        author: "Lara Avery",
        brief :"A lively, witty ride with a strong cast of supporting characters. Avery tackles the topic of grief in a way that manages to feel lighthearted and profound at the same time. I flew through this book and loved every page. --Meg Mitchell Moore, bestselling author of Summer Stage",
        img: "https://images-us.bookshop.org/ingram/9780063273757.jpg?height=500&v=v2" 
    }
,
    {
        id:'3' ,
        title:"They Called Us Exceptional: And Other Lies That Raised Us",
        author: "Prachi Gupta",
        brief :"An Indian American daughter reveals how the dangerous model minority myth fractured her family in this searingly honest memoir that manages to be at once a scalding indictment and a heartfelt love letter (Scott Stossel, author of My Age of Anxiety).",
        img: "https://images-us.bookshop.org/ingram/9780593442982.jpg?height=500&v=v2-8ef58deb86f8d880efb8fdea539df5e1" 
    }

    ,

    {
        id:'4' ,
        title:"Swim Home to the Vanished",
        author: "Brendan Shay Basham",
        brief :"Swim Home to the Vanished is a lush and fantastic journey through strange lands and minds from an incandescent new voice full of my kind of melancholic brilliance and unromantic magic.",
        img: "https://images-us.bookshop.org/ingram/9780063241084.jpg?height=500&v=v2-c375db03e5b51d61daa46d9561aa8c67" 
    }

    , {
        id:'5' ,
        title:"Quiet Street: On American Privilege",
        author: "Nick McDonell",
        brief :"A bold and deeply personal exploration of wealth, power, and the American elite, exposing how the ruling class--intentionally or not--perpetuates cycles of injustice",
        img: "https://images-us.bookshop.org/ingram/9780593316788.jpg?height=500&v=v2-11817bb5a9dad6d89c5ba8fe2d62c4da" 
    }
    , {
        id:'6' ,
        title:"Safe and Sound: A Renter-Friendly Guide to Home Repair",
        author: "Mercury Stardust",
        brief :"Don't panic--Mercury Stardust, AKA The Trans Handy Ma'am is here to help!For too many people, the simple act of contacting a plumber or repair person can feel like a game of chance.",
        img: "https://images-us.bookshop.org/ingram/9780744079074.jpg?height=500&v=v2-da93e8f9a9a6d8a4320c20dbe3979ba9" 
    }, {
        id:'7' ,
        title:"Hidden Potential: The Science of Achieving Greater Thing",
        author: "Adam Grant",
        brief :"This brilliant book will shatter your assumptions about what it takes to improve and succeed. I wish I could go back in time and gift it to my younger self. It would've helped me find a more joyful path to progress",
        img: "https://images-us.bookshop.org/ingram/9780593653142.jpg?height=500&v=v2-c6823659b72995703fcf3949c65e177f" 
    }
    , {
        id:'8' ,
        title:"Still Born",
        author: "Guadalupe Nettel",
        brief :"Shortlisted for the 2023 International Booker Prize A profound novel about motherhood, friendship, and the power of community from one of the leading lights in contemporary Latin American literature (Valeria Luiselli, author of Lost Children Archive).",
        img: "https://images-us.bookshop.org/ingram/9781639730032.jpg?height=500&v=v2-48c16e8a82e7868dabb887cafd87e2ce" 
    }
    , {
        id:'9' ,
        title:"Panics",
        author: "Barbara Molinard",
        brief :"A haunting, bizarre short story collection about violence, mental illness, and the warped contradictions of the twentieth-century female experience.",
        img: "https://images-us.bookshop.org/ingram/9781558612952.jpg?height=500&v=v2-c39f8e9f52458c7c7e767c4cf6e0c649" 
    }
    , {
        id:'10' ,
        title:"Tom Lake: A Reese's Book Club Pick",
        author: "Ann Patchett",
        brief :"In this beautiful and moving novel about family, love, and growing up, Ann Patchett once again proves herself one of America's finest writers.",
        img: "https://images-us.bookshop.org/ingram/9780063327528.jpg?height=500&v=v2-48d3a7f5423e21fb6179e1aa16c76f75" 
    }, {
        id:'11' ,
        title:"Fourth Wing",
        author: "Nick McDonell",
        brief :"Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy.",
        img: "https://images-us.bookshop.org/ingram/9781649374042.jpg?height=500&v=v2-868406254abd488b7f94ddf869b93cf1"}

    , {
        id:'12' ,
        title:"Ink Blood Sister Scribe: A Good Morning America Book Club Pick",
        author: "Nick McDonell",
        brief :"Follow where this novel leads and you will be lost in a bewitching spell, a book of magic about books of magic . . . extraordinary. - MARLON JAMESIn this spellbinding debut novel, two estranged half-sisters tasked with guarding their family's library of magical books must work together to unravel a deadly secret at the heart of their collection--a tale of familial loyalty and betrayal, and the pursuit of magic and power.",
        img: "https://images-us.bookshop.org/ingram/9780063253469.jpg?height=500&v=v2-3f13cfab377fe1929b1746cee58fe947" 
    }
    , {
        id:'13' ,
        title:"After the Forest",
        author: "Kell Woods",
        brief :"After the Forest is a dark and enchanting fantasy debut from Kell Woods that explores the repercussions of a childhood filled with magic and a young woman contending with the truth of happily ever after.",
        img: "https://images-us.bookshop.org/ingram/9781250852489.jpg?height=500&v=v2-65682f0297dd4ad56ebe17c72d98a29f" 
    }
    , {
        id:'14' ,
        title:"Godkiller",
        author: "Hannah Kaner",
        brief :"Godkiller will have you in its grasp from the first pages. . . An extraordinary journey. -- Samantha Shannon, New York Times bestselling author of The Priory of the Orange Tree",
        img: "https://images-us.bookshop.org/ingram/9780063348271.jpg?height=500&v=v2-8f46b6bc34030a7b14bf93e87bfbaeee" 
    }
    , {
        id:'13' ,
        title:"The Nap Ministry's Rest Deck: 50 Practices to Resist Grind Cultur",
        author: "Tricia Hersey",
        brief :"From Tricia Hersey, the celebrated founder of the Nap Ministry and author of the New York Times bestseller Rest Is Resistance, this deck of 50 powerful rest practices helps you embrace rest as a form of radical communal care and personal liberation.",
        img: "https://images-us.bookshop.org/ingram/9781797215761.jpg?height=500&v=v2-f599ed72ea596424c19b956e6ab9ed31" 
    }

]
export default books;
