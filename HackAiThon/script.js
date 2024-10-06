// Failure stories for the modal
const failureStories = [
    {
        title: "The Fall of the Roman Empire",
        body: "The fall of the Roman Empire seemed like a big failure, but it actually helped the world grow in a surprising way. When the empire fell apart, many people lost their jobs and safety, which was tough. However, this made room for new ideas to sprout. As people began to explore art and science again, they started learning from the past and creating amazing things. Artists like Leonardo da Vinci made beautiful paintings, and scientists discovered new things about the stars. So, even though the fall of the Roman Empire was hard, it taught people that failures can lead to fresh starts and incredible achievements, showing us that we can grow from our mistakes."
    },
    {
        title: "Roanoke Colony Disappearance",
        body: "The Roanoke Colony, established in the late 16th century, is often remembered for its mysterious disappearance, which is considered a significant failure in early American colonization efforts. However, this failure sparked curiosity and inspired future explorers to learn from past mistakes. The challenges faced by the Roanoke settlers, such as conflicts with Indigenous peoples and difficulties in resource management, highlighted the need for better planning and cooperation in future settlements. As a result, later colonies, like Jamestown, were established with improved strategies, including stronger alliances with Native Americans and more organized supply systems. The Roanoke experience taught us that failures can lead to growth by encouraging innovation, better communication, and a deeper understanding of how to build successful communities."
    } ,
    {
        title: "The Salem Witch Trials",
        body: "The Salem witch trials were a troubling period when many innocent people were accused of witchcraft, leading to wrongful convictions and executions. This failure in justice sparked important conversations about fairness and the rule of law. In the aftermath, communities recognized the dangers of mob mentality and the need for due process. For instance, these events influenced the development of legal principles that protect individual rights, such as the presumption of innocence and the requirement for substantial evidence in court cases. The trials also prompted reforms in how society approached accusations and evidence, ensuring that future legal systems prioritize justice over hysteria. Ultimately, while the trials were a dark chapter in history, they taught valuable lessons about the importance of critical thinking, fairness, and compassion in our communities."
    }
    
];

// Modal functionality
function openModal(index) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerText = failureStories[index].title;
    modalBody.innerText = failureStories[index].body;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Quote generator
const quotes = [ 
    "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Do not be embarrassed by your failures, learn from them and start again. - Richard Branson",
    "Only those who dare to fail greatly can ever achieve greatly. - Robert F. Kennedy",
    "Every failure is a step to success. - William Whewell",
    "Failure is a detour, not a dead-end street. - Zig Ziglar",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Mistakes are proof that you are trying. - Jennifer Lim",
    "Failure is not the opposite of success; it’s part of success. - Arianna Huffington",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "What is failure anyway? It’s just another step towards your ultimate goal. - Unknown",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "Failure is an event, not a person. Yesterday ended last night. - Zig Ziglar",
    "There is no failure. Only feedback. - Robert Allen",
    "Failure should be our teacher, not our attacker. - John C. Maxwell",
    "You cannot measure success without first experiencing failure. - Unknown",
    "The only real mistake is the one from which we learn nothing. - Henry Ford",
    "I think I am more of a coward than a brave person because every time I fail, I learn from it. - Rihanna",
    "The only way to avoid failure is to never try anything new. - Unknown",
    "Every setback is a setup for a comeback. - T.D. Jakes",
    "Remember that failure is an event, not a person. - Zig Ziglar",
    "The man who makes no mistakes does not usually make anything. - Edward P. Murphy",
    "It's fine to celebrate success, but it is more important to heed the lessons of failure. - Bill Gates",
    "Failure is the key to success; each mistake teaches us something. - Morihei Ueshiba",
    "Failure is not falling down, but refusing to get up. - Chinese Proverb"
];


document.getElementById('generate-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerText = quotes[randomIndex];
});

//Add your own failure

document.getElementById("failure-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const title = document.getElementById("failure-title").value;
    const description = document.getElementById("failure-description").value;
    const imageUrl = document.getElementById("failure-image").value;

    // Create a new timeline item
    const newTimelineItem = document.createElement("div");
    newTimelineItem.classList.add("timeline-item");

    // Alternate left and right timeline placement
    const timelineItems = document.querySelectorAll(".timeline-item");
    if (timelineItems.length % 2 === 0) {
        newTimelineItem.classList.add("timeline-item");
    } else {
        newTimelineItem.classList.add("timeline-item");
        newTimelineItem.style.flexDirection = "row-reverse";
    }

    // Add the content to the timeline item
    newTimelineItem.innerHTML = `
        <div class="content-left">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="image-right">
            <img src="${imageUrl || 'https://via.placeholder.com/150'}" alt="Failure Image">
        </div>
    `;

    // Append the new item to the timeline
    document.querySelector(".timeline").appendChild(newTimelineItem);

    // Clear form inputs
    document.getElementById("failure-form").reset();
});
// Scroll Animation for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

function checkVisibility() {
    timelineItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);