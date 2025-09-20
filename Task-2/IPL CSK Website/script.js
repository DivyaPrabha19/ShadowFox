// Official CSK Player Data - ADD YOUR IMAGES IN THE image: "" FIELD
const cskPlayers = {
    current: [
        {
            name: "MS Dhoni",
            role: "Wicket-keeper Batsman",
            image: "dhoniii.png",
            matches: 264,
            runs: 5082,
            average: 39.1,
            strikeRate: 135.9,
            history: "Mahendra Singh Dhoni is CSK's most iconic captain and wicket-keeper. He led India to victory in the 2007 T20 World Cup, 2011 Cricket World Cup, and 2013 Champions Trophy. Known as 'Captain Cool' for his calm demeanor under pressure, Dhoni has been CSK's backbone since 2008. His helicopter shot became legendary, and his finishing abilities in crucial matches are unmatched. Under his captaincy, CSK won IPL titles in 2010, 2011, 2018, and 2021."
        },
        {
            name: "Ruturaj Gaikwad",
            role: "Opening Batsman (Captain)",
            image: "gaikward.avif",
            matches: 58,
            runs: 2380,
            average: 43.3,
            strikeRate: 134.9,
            history: "Ruturaj Gaikwad is CSK's current captain and opening batsman. He made his IPL debut in 2020 and quickly established himself as a reliable opener. In 2021, he won the Orange Cap with 635 runs, becoming the youngest player to achieve this feat. His elegant stroke play and consistency at the top of the order made him MS Dhoni's natural successor as captain."
        },
        {
            name: "Ravindra Jadeja",
            role: "All-rounder",
            image: "jadeja.png",
            matches: 240,
            runs: 2756,
            average: 26.8,
            wickets: 157,
            history: "Ravindra Jadeja is one of cricket's finest all-rounders. Known as 'Sir Jadeja' by fans, he's been CSK's premier spinner and lower-order finisher since 2012. His left-arm orthodox spin, athletic fielding, and explosive batting make him invaluable. He's taken crucial wickets in pressure situations and scored match-winning runs."
        },
        {
            name: "Devon Conway",
            role: "Batsman",
            image: "devon.avif",
            matches: 32,
            runs: 1152,
            average: 42.7,
            strikeRate: 139.2,
            history: "Devon Conway represents New Zealand and joined CSK in 2022. A left-handed batsman known for his technique and adaptability across formats. He made headlines with a double century on Test debut against England. His ability to play both anchor and aggressive roles makes him valuable in T20 cricket."
        },
        {
            name: "Rachin Ravindra",
            role: "All-Rounder",
            image: "rachin.avif",
            matches: 11,
            runs: 222,
            wickets: 3,
            average: 24.7,
            strikeRate: 140.5,
            history: "Rachin Ravindra is a talented New Zealand all-rounder who bats left-handed and bowls left-arm spin. He made headlines with his performances in the 2023 ODI World Cup, scoring three centuries. Ravindra is known for his classical batting technique and useful spin bowling, making him a valuable asset in T20 cricket."
        },
        {
            name: "Matheesha Pathirana",
            role: "Bowler",
            image: "matheesha.avif",
            matches: 24,
            wickets: 28,
            economy: 9.2,
            bestBowling: "4/28",
            history: "Matheesha Pathirana is a Sri Lankan fast bowler known for his unique sling-arm action similar to Lasith Malinga. He generates good pace and bounce, and his unusual action makes him difficult to face. Pathirana has been developed through CSK's system and represents their investment in young talent."
        }
    ],
    
    legends: [
        {
            name: "Suresh Raina",
            role: "Batsman",
            image: "raina.avif",
            matches: 205,
            runs: 5528,
            average: 32.5,
            strikeRate: 136.7,
            history: "Suresh Raina is CSK's highest run-scorer and 'Mr. IPL'. He was the first player to score 5000 IPL runs and holds the record for most catches by a fielder in IPL. Raina's aggressive batting at number 3 and exceptional fielding made him indispensable. He was part of all CSK's title-winning campaigns from 2008-2015."
        },
        {
            name: "Dwayne Bravo",
            role: "All-rounder",
            image: "bravoo.avif",
            matches: 161,
            runs: 1560,
            wickets: 183,
            economy: 8.4,
            history: "Dwayne Bravo is CSK's death overs specialist and former highest wicket-taker in IPL. The West Indian all-rounder joined CSK in 2011 and became synonymous with the franchise. His slower deliveries, yorkers, and variations made him nearly unplayable in death overs. His 'Champion' dance celebration became iconic among CSK fans."
        },
        {
            name: "Shane Watson",
            role: "All-rounder",
            image: "watsonn.jpg",
            matches: 145,
            runs: 3874,
            average: 30.99,
            strikeRate: 137.9,
            history: "Shane Watson joined CSK in 2018 and became their opening batsman. The Australian all-rounder's most memorable performance was his unbeaten 117 in the 2018 IPL final against SRH, leading CSK to their third title. Despite battling injuries throughout his career, Watson's power-hitting and medium-pace bowling were crucial for CSK."
        }
    ]
};

const championshipHistory = [
    {
        year: "2010",
        title: "First IPL Championship",
        description: "🏆 CHAMPIONS! Defeated Mumbai Indians by 22 runs in the final at DY Patil Stadium. Suresh Raina (57*) and MS Dhoni (22*) guided CSK to 168/5.",
        image: "20100.jpeg",
        squad: "MS Dhoni (C), Suresh Raina, Matthew Hayden, Murali Vijay, S Badrinath, Albie Morkel, Ravichandran Ashwin, Doug Bollinger, Muttiah Muralitharan, Joginder Sharma, Lakshmipathy Balaji, Shadab Jakati, Anirudh Singh, Manpreet Gony, Thilan Thushara"
    },
    {
        year: "2011",
        title: "Back-to-Back Champions",
        description: "🏆 CHAMPIONS! Beat Royal Challengers Bangalore by 58 runs in the final at MA Chidambaram Stadium. MS Dhoni (91* off 79 balls) played a captain's knock.",
        image: "2011.jpg",
        squad: "MS Dhoni (C), Suresh Raina, Murali Vijay, S Badrinath, Wriddhiman Saha, Albie Morkel, Ravichandran Ashwin, Doug Bollinger, Muttiah Muralitharan, Ben Hilfenhaus, Lakshmipathy Balaji, Shadab Jakati, Anirudh Singh, Manpreet Gony, Francois du Plessis"
    },
    {
        year: "2018",
        title: "Triumphant Return",
        description: "🏆 CHAMPIONS! Comeback kings! Defeated Sunrisers Hyderabad by 8 wickets. Shane Watson's unbeaten 117* was one of the greatest IPL final performances.",
        image: "20188.jpeg",
        squad: "MS Dhoni (C), Shane Watson, Ambati Rayudu, Suresh Raina, Kedar Jadhav, Dwayne Bravo, Ravindra Jadeja, Deepak Chahar, Shardul Thakur, Imran Tahir, Harbhajan Singh, Lungi Ngidi, Faf du Plessis, Sam Billings, Mark Wood"
    },
    {
        year: "2021",
        title: "Fourth Championship",
        description: "🏆 CHAMPIONS! Defeated Kolkata Knight Riders by 27 runs in the final at Dubai. Faf du Plessis (86) and Ruturaj Gaikwad (32) set up 192/3.",
        image: "2021.jpg",
        squad: "MS Dhoni (C), Ruturaj Gaikwad, Faf du Plessis, Moeen Ali, Ambati Rayudu, Suresh Raina, Ravindra Jadeja, Dwayne Bravo, Shardul Thakur, Deepak Chahar, Josh Hazlewood, Imran Tahir, Robin Uthappa, Sam Curran, Lungi Ngidi"
    },
    {
        year: "2023",
        title: "Fifth Championship",
        description: "🏆 CHAMPIONS! Won the IPL 2023 title. Another glorious victory for the Chennai Super Kings franchise.",
        image: "2023.jpg",
        squad: "MS Dhoni (C), Devon Conway, Ruturaj Gaikwad, Ajinkya Rahane, Shivam Dube, Ravindra Jadeja, Moeen Ali, Deepak Chahar, Tushar Deshpande, Matheesha Pathirana, Maheesh Theekshana, Mitchell Santner, Ben Stokes, Ambati Rayudu, Subhranshu Senapati"
    }
];

const teamStats = [
    { number: "5", label: "IPL Championships" },
    { number: "12", label: "Playoff Appearances" },
    { number: "10", label: "Final Appearances" },
    { number: "64.7%", label: "Win Percentage" },
    { number: "240+", label: "Matches Played" },
    { number: "1", label: "Champions League T20" }
];

// DOM Elements
const playersGrid = document.getElementById('playersGrid');
const timeline = document.getElementById('timeline');
const statsGrid = document.getElementById('statsGrid');
const playerModal = document.getElementById('playerModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');

let currentTab = 'current';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPlayers();
    loadHistory();
    loadStats();
    setupEventListeners();
});

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTab = this.dataset.tab;
            loadPlayers();
        });
    });

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
}

function loadPlayers() {
    const fragment = document.createDocumentFragment();
    const players = cskPlayers[currentTab];
    
    players.forEach(player => {
        const card = createPlayerCard(player);
        fragment.appendChild(card);
    });
    
    playersGrid.innerHTML = '';
    playersGrid.appendChild(fragment);
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.onclick = () => openPlayerModal(player);
    
    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="player-img" onerror="this.src='https://via.placeholder.com/180x180/FFD700/000?text=${player.name.split(' ').map(n => n[0]).join('')}'">
        <h3 class="player-name">${player.name}</h3>
        <p class="player-role">${player.role}</p>
        <div class="player-stats">
            <div class="stat-item">
                <span class="stat-value">${player.matches || 'N/A'}</span>
                <span class="stat-label">Matches</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${player.runs || player.wickets || 'N/A'}</span>
                <span class="stat-label">${player.runs ? 'Runs' : 'Wickets'}</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${player.average || player.economy || 'N/A'}</span>
                <span class="stat-label">${player.average ? 'Average' : 'Economy'}</span>
            </div>
        </div>
    `;
    
    return card;
}

function openPlayerModal(player) {
    modalBody.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="modal-player-img" onerror="this.src='https://via.placeholder.com/220x220/FFD700/000?text=${player.name.split(' ').map(n => n[0]).join('')}'">
        <h2 class="modal-player-name">${player.name}</h2>
        <p class="modal-player-role">${player.role}</p>
        
        <div class="modal-history">
            <h3>Cricket History & Career</h3>
            <p>${player.history}</p>
        </div>
        
        <div class="modal-stats">
            ${player.matches ? `
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.matches}</span>
                    <span class="modal-stat-label">Matches</span>
                </div>
            ` : ''}
            ${player.runs ? `
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.runs}</span>
                    <span class="modal-stat-label">Runs</span>
                </div>
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.average}</span>
                    <span class="modal-stat-label">Average</span>
                </div>
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.strikeRate}</span>
                    <span class="modal-stat-label">Strike Rate</span>
                </div>
            ` : ''}
            ${player.wickets ? `
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.wickets}</span>
                    <span class="modal-stat-label">Wickets</span>
                </div>
                <div class="modal-stat">
                    <span class="modal-stat-value">${player.economy}</span>
                    <span class="modal-stat-label">Economy</span>
                </div>
            ` : ''}
        </div>
    `;
    
    playerModal.style.display = 'block';
}

function closeModal() {
    playerModal.style.display = 'none';
}

function loadHistory() {
    timeline.innerHTML = '';
    
    championshipHistory.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 style="color: #FFD700; margin-bottom: 1rem;">${item.title}</h3>
                <img src="${item.image}" alt="${item.title}" class="timeline-image">
                <p class="timeline-text">${item.description}</p>
                ${item.squad ? `
                    <div class="squad-container">
                        <h4 class="squad-title">Championship Squad</h4>
                        <div class="squad-names">${item.squad}</div>
                    </div>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function loadStats() {
    statsGrid.innerHTML = '';
    
    teamStats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        
        statCard.innerHTML = `
            <span class="stat-card-number">${stat.number}</span>
            <span class="stat-card-label">${stat.label}</span>
        `;
        
        statsGrid.appendChild(statCard);
    });
}

// Optimized background color change
let lastClick = 0;
document.addEventListener('click', function(e) {
    const now = Date.now();
    if (now - lastClick < 200) return;
    lastClick = now;
    
    const colors = ['#000', '#1a1a1a', '#2a2a2a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, #1a1a1a 50%, #FFD700 100%)`;
});
