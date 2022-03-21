const products = [
  {
    id: "1",
    image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159587.jpg",
    tittle: "Dorian Grey",
    author: "Oscar Wilde",
    price: 15,
    stock: 10,
    category: "Classics",
    sinopsis: "Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.” Just a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment. Of Dorian Gray’s relationship to autobiography, Wilde noted in a letter, “Basil Hallward is what I think I am: Lord Henry what the world thinks me: Dorian what I would like to be—in other ages, perhaps."
  },
  {
    id: "2",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Jane_Eyre_title_page.jpg",
    tittle: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 20,
    stock: 10,
    category: "Classics",
    sinopsis: "Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?"
  },
  {
    id: "3",
    image: "https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141192475.jpg",
    tittle: "Emma",
    author: "Jane Austen",
    price: 10,
    stock: 10,
    category: "Classics",
    sinopsis: "Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect."
  },
  {
    id: "4",
    image: "https://images.penguinrandomhouse.com/cover/9780451530998",
    tittle: "Hard Times",
    author: "Charles Dickens",
    price: 14,
    stock: 10,
    category: "Classics",
    sinopsis: "'My satire is against those who see figures and averages, and nothing else,' proclaimed Charles Dickens in explaining the theme of this classic novel. Published in 1854, the story concerns one Thomas Gradgrind, a 'fanatic of the demonstrable fact,' who raises his children, Tom and Louisa, in a stifling and arid atmosphere of grim practicality. Without a moral compass to guide them, the children sink into lives of desperation and despair, played out against the grim background of Coketown, a wretched community shadowed by an industrial behemoth. Louisa falls into a loveless marriage with Josiah Bouderby, a vulgar banker, while the unscrupulous Tom, totally lacking in principle, becomes a thief who frames an innocent man for his crime. Witnessing the degradation and downfall of his children, Gradgrind realizes that his own misguided principles have ruined their lives. Considered Dickens' harshest indictment of mid-19th-century industrial practices and their dehumanizing effects, this novel offers a fascinating tapestry of Victorian life, filled with the richness of detail, brilliant characterization, and passionate social concern that typify the novelist's finest creations."
  },
  {
    id: "5",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781787557000/persuasion-9781787557000_hr.jpg",
    tittle: "Persuasion",
    author: "Jane Austen",
    price: 18,
    stock: 10,
    category: "Classics",
    sinopsis: "Twenty-seven-year old Anne Elliot is Austen's most adult heroine. Eight years before the story proper begins, she is happily betrothed to a naval officer, Frederick Wentworth, but she precipitously breaks off the engagement when persuaded by her friend Lady Russell that such a match is unworthy. The breakup produces in Anne a deep and long-lasting regret. When later Wentworth returns from sea a rich and successful captain, he finds Anne's family on the brink of financial ruin and his own sister a tenant in Kellynch Hall, the Elliot estate. All the tension of the novel revolves around one question: Will Anne and Wentworth be reunited in their love? Jane Austen once compared her writing to painting on a little bit of ivory, 2 inches square. Readers of Persuasion will discover that neither her skill for delicate, ironic observations on social custom, love, and marriage nor her ability to apply a sharp focus lens to English manners and morals has deserted her in her final finished work."
  },
  {
    id: "6",
    image: "https://kbimages1-a.akamaihd.net/9541dc73-a03c-433d-9e2c-9fba5ff67ea5/1200/1200/False/dracula-173.jpg",
    tittle: "Dracula",
    author: "Bram Stoker",
    price: 25,
    stock: 10,
    category: "Classics",
    sinopsis: "A rich selection of background and source materials is provided in three areas: Contexts includes probable inspirations for Dracula in the earlier works of James Malcolm Rymer and Emily Gerard. Also included are a discussion of Stoker's working notes for the novel and 'Dracula's Guest,' the original opening chapter to Dracula. Reviews and Reactions reprints five early reviews of the novel. 'Dramatic and Film Variations' focuses on theater and film adaptations of Dracula, two indications of the novel's unwavering appeal. David J. Skal, Gregory A. Waller, and Nina Auerbach offer their varied perspectives. Checklists of both dramatic and film adaptations are included."
  },
  {
    id: "7",
    image: "http://prodimage.images-bn.com/pimages/9781950435098_p0_v2_s1200x630.jpg",
    tittle: "Little Women",
    author: "Louisa May Alcott",
    price: 14,
    stock: 10,
    category: "Classics",
    sinopsis: "Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War. It is no secret that Alcott based Little Women on her own early life. While her father, the freethinking reformer and abolitionist Bronson Alcott, hobnobbed with such eminent male authors as Emerson, Thoreau, and Hawthorne, Louisa supported herself and her sisters with 'woman’s work,' including sewing, doing laundry, and acting as a domestic servant. But she soon discovered she could make more money writing. Little Women brought her lasting fame and fortune, and far from being the 'girl’s book' her publisher requested, it explores such timeless themes as love and death, war and peace, the conflict between personal ambition and family responsibilities, and the clash of cultures between Europe and America."
  },
  {
    id: "8",
    image: "https://images-na.ssl-images-amazon.com/images/I/81PdOsc95OL.jpg",
    tittle: "It Ends with Us",
    author: "Colleen Hoover",
    price: 20,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "Sometimes it is the one who loves you who hurts you the most. Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true.Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened."
  },
  {
    id: "9",
    image: "https://prodimage.images-bn.com/pimages/9780063274105_p0_v3_s550x406.jpg",
    tittle: "The First to Die at the End",
    author: "Adam Silvera",
    price: 14,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "It’s the night before Death-Cast goes live, and there’s one question on everyone’s mind: Can Death-Cast actually predict when someone will die, or is it just an elaborate hoax? Orion Pagan has waited years for someone to tell him that he’s going to die. He has a serious heart condition, and he signed up for Death-Cast so he could know what’s coming. Valentino Prince is restarting his life in New York. He has a long and promising future ahead and he only registered for Death-Cast after his twin sister nearly died in a car accident. Orion and Valentino cross paths in Times Square and immediately feel a deep connection. But when the first round of End Day calls goes out, their lives are changed forever—one of them receives a call, and the other doesn’t. Though neither boy is certain how the day will end, they know they want to spend it together…even if that means their goodbye will be heartbreaking."
  },
  {
    id: "10",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645688013l/59332540._SY475_.jpg",
    tittle: "The Ballad of Never After",
    author: "Stephanie Garber",
    price: 11,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "Not every love is meant to be. After Jacks, the Prince of Hearts, betrays her, Evangeline Fox swears she’ll never trust him again. Now that she’s discovered her own magic, Evangeline believes she can use it to restore the chance at happily ever after that Jacks stole away. But when a new terrifying curse is revealed, Evangeline finds herself entering into a tenuous partnership with the Prince of Hearts again. Only this time, the rules have changed. Jacks isn’t the only force Evangeline needs to be wary of. In fact, he might be the only one she can trust, despite her desire to despise him. Instead of a love spell wreaking havoc on Evangeline’s life, a murderous spell has been cast. To break it, Evangeline and Jacks will have to do battle with old friends, new foes, and a magic that plays with heads and hearts. Evangeline has always trusted her heart, but this time she’s not sure she can. . . . "
  },
  {
    id: "11",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984896391_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    price: 15,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. But having grown up in the same small town that was consumed by the murder, Pippa Fitz-Amobi isn't so sure. When she chooses the case as the topic for her final year project, she starts to uncover secrets that someone in town desperately wants to stay hidden. And if the real killer is still out there, how far will they go to keep Pip from the truth? "
  },
  {
    id: "12",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316479882_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "Kingdom of the Feared",
    author: "Kerri Maniscalco",
    price: 13,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "Emilia is reeling from the shocking discovery that her twin sister, Vittoria, is alive. But before she faces the demons of her past, Emilia yearns to claim her king, the seductive Prince of Wrath, in the flesh. Emilia doesn’t simply desire his body, she wants his heart and soul—but that’s something the enigmatic demon can’t promise her. When a high-ranking member of House Greed is assassinated, Emilia and Wrath are drawn to the rival demon court. Damning evidence points to Vittoria as the murderer and she’s quickly declared an enemy of the Seven Circles. Despite her betrayal, Emilia will do anything to solve this new mystery and find out who her sister really is. Together Emilia and Wrath play a sin-fueled game of deception as they work to stop the unrest that’s brewing between witches, demons, shape-shifters and the most treacherous foes of all: the Feared. Emilia was warned that when it came to the Wicked nothing was as it seemed. But, have the true villains been much closer all along? When the truth is finally revealed, it just might end up costing Emilia her heart."
  },
  {
    id: "13",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781423152880_p0_v8%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "Code Name Verity",
    author: "Elizabeth Wein",
    price: 14,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "Oct. 11th, 1943 - A British spy plane crashes in Nazi-occupied France. Its pilot and passenger are best friends. One of the girls has a chance at survival. The other has lost the game before it's barely begun. When 'Verity' is arrested by the Gestapo, she's sure she doesn't stand a chance. As a secret agent captured in enemy territory, she's living a spy's worst nightmare. Her Nazi interrogators give her a simple choice: reveal her mission or face a grisly execution. As she intricately weaves her confession, Verity uncovers her past, how she became friends with the pilot Maddie, and why she left Maddie in the wrecked fuselage of their plane. On each new scrap of paper, Verity battles for her life, confronting her views on courage and failure and her desperate hope to make it home. But will trading her secrets be enough to save her from the enemy?"
  },
  {
    id: "14",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538748282_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "The Match",
    author: "Harlan Coben",
    price: 21,
    stock: 10,
    category: "Bestsellers",
    sinopsis: "Wilde has grown up knowing nothing of his family, and even less about his own identity . All he knows is that, as a young child, he was found living a feral existence in the Ramapo mountains of New Jersey. He became known simply as Wilde, the boy from the woods. Now Wilde has had a hit on the DNA website he has been researching. A 100% match. His father. They meet up, and Wilde soon realises that his father doesn't even know he had a son and is as mystified as Wilde is by his existence. Undaunted, Wilde continues his research for his family on DNA websites where he becomes caught up in a community of online doxxers, a secret group committed to exposing anonymous trolls. Then one by one these doxxers start to die, and it soon becomes clear that a serial killer is targeting this secret community - and that his next victim might be Wilde himself ... "
  },
  {
    id: "15",
    image: "https://http2.mlstatic.com/D_NQ_NP_933403-MLA42242578990_062020-O.webp",
    tittle: "Milk and Honey",
    author: "Rupi Kaur",
    price: 11,
    stock: 10,
    category: "Poetry",
    sinopsis: "Milk and honey' is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity. It is split into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. 'milk and honey' takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look. "
  },
  {
    id: "16",
    image: "https://m.media-amazon.com/images/I/41nBeF8hgAL.jpg",
    tittle: "Playlist for the Apocalypse",
    author: "Rita Dove",
    price: 9,
    stock: 10,
    category: "Poetry",
    sinopsis: "In her first volume of new poems in twelve years, Rita Dove investigates the vacillating moral compass guiding America’s, and the world’s, experiments in democracy. Whether depicting the first Jewish ghetto in sixteenth-century Venice or the contemporary efforts of Black Lives Matter, a girls’ night clubbing in the shadow of World War II or the doomed nobility of Muhammad Ali’s conscious objector stance, this extraordinary poet never fails to connect history’s grand exploits to the triumphs and tragedies of individual lives. Meticulously orchestrated and musical in its forms, Playlist for the Apocalypse collects a dazzling array of voices: an elevator operator simmers with resentment, an octogenarian dances an exuberant mambo, a spring cricket philosophizes with mordant humor on hip hop, critics, and Valentine’s Day. Calamity turns all too personal in the book’s final section, “Little Book of Woe,” which charts a journey from terror to hope as Dove learns to cope with debilitating chronic illness. At turns audaciously playful and grave, alternating poignant meditations on mortality and acerbic observations of injustice, Playlist for the Apocalypse takes us from the smallest moments of redemption to catastrophic failures of the human soul. Listen up, the poet says, speaking truth to power; what you’ll hear in return is “a lifetime of song.”"
  },
  {
    id: "17",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593465066_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "Call Us What We Carry",
    author: "Amanda Gorman",
    price: 16,
    stock: 10,
    category: "Poetry",
    sinopsis: "Formerly titled The Hill We Climb and Other Poems, Amanda Gorman’s remarkable new collection reveals an energizing and unforgettable voice in American poetry. Call Us What We Carry is Gorman at her finest. Including “The Hill We Climb,” the stirring poem read at the inauguration of the 46th President of the United States, Joe Biden, and bursting with musical language and exploring themes of identity, grief, and memory, this lyric of hope and healing captures an important moment in our country’s consciousness while being utterly timeless."
  },
  {
    id: "18",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781771681926_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "Sincerely",
    author: "F. S. Yousaf",
    price: 20,
    stock: 10,
    category: "Poetry",
    sinopsis: "Searching for a profound way to propose to his love, F.S. Yousaf reread the letters she had written him. In them he found his proposal, as well as inspiration to write his own prose and poetry. From this inspiration, Sincerely was born. It carries messages of positivity, hope, and most of all, true love."
  },
  {
    id: "19",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781451639759_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "When Angels Speak of Love",
    author: "bell hooks",
    price: 12,
    stock: 10,
    category: "Poetry",
    sinopsis: "This collection of 50 poems illuminates our experiences of love - tracing the links between seduction and surrender; the intensity of desire; and the anguish of death."
  },
  {
    id: "20",
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781524851958_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    tittle: "unlock your storybook heart",
    author: "Amanda Lovelace",
    price: 17,
    stock: 10,
    category: "Poetry",
    sinopsis:"Amanda Lovelace, the bestselling & award-winning author of the “women are some kind of magic” poetry series, presents unlock your storybook heart, the third & final installment in her feminist poetry series, “you are your own fairy tale.” this is a collection about being so caught up in the fable that is perfectionism that you miss out on your own life. be honest: when was the last time you stopped to take in the everyday enchantment all around you? "
  },
];


export const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };


// detalle de un unico producto


export const getFetchDetails = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(prod => prod.id === id)), 10);
  });
};

