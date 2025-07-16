const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.getElementById('cardContainer')

const cardGenerate = (member) => {

  const {name, role, email, img} = member;

  const singleCard = `
              <div class="col-4">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-4 bg-black">
                            <img src="img/male1.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-8 bg-black">
                            <div class="card-body text-light fw-bold">
                                <h5 class="card-title ">Marco Bianchi</h5>
                                <p class="card-text">Designer</p>
                                <p class="card-text text-info">marcobianchi@team.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
      return singleCard
}

for (let i = 0; i<teamMembers.length; i++){
  let card = cardGenerate(teamMembers[i]);
  cardContainer.innerHTML += card
}