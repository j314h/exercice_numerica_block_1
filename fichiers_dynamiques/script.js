const app = {
  //see menu on mobile
  seeMenuMobile: () => {
    const menu = document.querySelector(".menu_mobile");

    menu.addEventListener("click", () => {
      const div1 = menu.firstElementChild;
      div1.classList.toggle("active1");
      const div2 = menu.lastElementChild;
      div2.classList.toggle("active2");

      const header = document.querySelector("header");
      header.classList.toggle("active_header");

      const body = document.querySelector("body");
      body.classList.toggle("desactive_scroll");
    });

    const lis = document.querySelectorAll(".menu-item");

    for (const li of lis) {
      li.addEventListener("click", () => {
        const div1 = menu.firstElementChild;
        div1.classList.toggle("active1");
        const div2 = menu.lastElementChild;
        div2.classList.toggle("active2");

        const header = document.querySelector("header");
        header.classList.toggle("active_header");
        const body = document.querySelector("body");
        body.classList.toggle("desactive_scroll");
      });
    }
  },

  //animate scroll
  scrollAnim: () => {
    const imgProfil = document.querySelector(".img_profil");
    const textProfil = document.querySelector(".text_a_propos");
    const textProfilHid = document.querySelector(".text_a_propos_hide");
    const btnSeeCv = document.querySelector(".section_a_propos_box_btn_voir_cv");
    const titleCompetence = document.querySelector("#title_competence");
    const titlePortfolio = document.querySelector("#title_portfolio");
    const textsMenu = document.querySelectorAll(".menu>li>a");
    const bloxCompetence = document.querySelectorAll(".competence_box_content");

    let scrollData = 0;
    let scaleProfil = 1;
    let translateProfil = 0;
    let translateText = 0;

    $(window).scroll(() => {
      let scroll = $(window).scrollTop();

      //down
      if (scroll > scrollData) {
        //img + 1er text a propos
        if (scaleProfil > 0.5) {
          scaleProfil = scaleProfil - 0.0235435;
          translateProfil = translateProfil - 0.332458;
          translateText = translateText - 0.8;
          imgProfil.style.transform = `matrix(${scaleProfil}, 0, 0, ${scaleProfil}, 0, ${translateProfil})`;
        } else {
          textProfil.style.opacity = "1";
        }

        //text propos hide
        if (scroll > 650) {
          textProfilHid.style.opacity = "1";
          btnSeeCv.style.opacity = "1";
        }

        //title competence animate
        if (scroll > 1378) {
          titleCompetence.style.opacity = "1";
        }
        //change color text menu
        if (window.innerWidth > 900) {
          if (scroll > 1695) {
            for (const text of textsMenu) {
              text.style.color = "#ffffff";
            }
          }
        }

        //see competence langage et divers
        if (scroll > 1450) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Langages") {
              competence.style.transform = "scale(1, 1)";
            }
          }
        }

        //see competence CMS
        if (scroll > 2070) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "CMS") {
              competence.style.transform = "scale(1, 1)";
            }
          }
        }

        //see competence data
        if (scroll > 2550) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Data") {
              competence.style.transform = "scale(1, 1)";
            }
          }
        }

        //see competence back end
        if (scroll > 2870) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Back End") {
              competence.style.transform = "scale(1, 1)";
            }
          }
        }

        //see competence front end
        if (scroll > 3400) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Front End") {
              competence.style.transform = "scale(1, 1)";
            }
          }
        }

        //active title portfolio
        if (scroll > 4330) {
          titlePortfolio.style.color = "#ffffff";
        }

        //activer text rpg de nico
        if (scroll > 4370) {
          const textPortfolio = document.querySelector(".rpg");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#7dc8dd";
          img.style.webkitFilter = "grayscale(0%)";
          img.style.filter = "grayscale(0%)";
          textPortfolio.style.color = "#ffffff";
        }

        //active text portfolio projetpro
        if (scroll > 5100) {
          const textPortfolio = document.querySelector(".projet-pro");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#7dc8dd";
          img.style.webkitFilter = "grayscale(0%)";
          img.style.filter = "grayscale(0%)";
          textPortfolio.style.color = "#ffffff";
        }

        //activer text blogoclock
        if (scroll > 5850) {
          const textPortfolio = document.querySelector(".blog-oclock");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#7dc8dd";
          img.style.webkitFilter = "grayscale(0%)";
          img.style.filter = "grayscale(0%)";
          textPortfolio.style.color = "#ffffff";
        }

        //up
      } else {
        //img + 1er text a propos
        if (scaleProfil < 1 && scroll < 150) {
          scaleProfil = scaleProfil + 0.0435435;
          translateProfil = translateProfil + 0.332458;
          imgProfil.style.transform = `matrix(${scaleProfil}, 0, 0, ${scaleProfil}, 0, ${translateProfil})`;
          textProfil.style.opacity = "0";
        } else {
        }

        //text propos hide
        if (scroll < 650) {
          textProfilHid.style.opacity = "0";
          btnSeeCv.style.opacity = "0";
        }

        //title competence animate
        if (scroll < 1378) {
          titleCompetence.style.opacity = "0";
        }

        //change color text menu
        if (window.innerWidth > 900) {
          if (scroll < 1695) {
            for (const text of textsMenu) {
              text.style.color = "#000000";
            }
          }
        }

        //see competence langage et divers
        if (scroll < 1450) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Langages") {
              competence.style.transform = "scale(1, 0)";
            }
          }
        }

        //see competence CMS
        if (scroll < 2070) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "CMS") {
              competence.style.transform = "scale(1, 0)";
            }
          }
        }

        //see competence data
        if (scroll < 2550) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Data") {
              competence.style.transform = "scale(1, 0)";
            }
          }
        }

        //see competence back end
        if (scroll < 2870) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Back End") {
              competence.style.transform = "scale(1, 0)";
            }
          }
        }

        //see competence front end
        if (scroll < 3400) {
          for (const competence of bloxCompetence) {
            const test = competence.querySelector("h3");
            if (test.id === "Front End") {
              competence.style.transform = "scale(1, 0)";
            }
          }
        }

        //deactivated title portfolio
        if (scroll < 4330) {
          titlePortfolio.style.color = "#3d3d3d";
          titlePortfolio.style.transition = "all 0.3s";
        }

        //activer text rpg de nico
        if (scroll < 4370) {
          const textPortfolio = document.querySelector(".rpg");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#3d3d3d";
          img.style.webkitFilter = "grayscale(100%)";
          img.style.filter = "grayscale(100%)";
          textPortfolio.style.color = "#3d3d3d";
        }

        //active text portfolio projetpro
        if (scroll < 5100) {
          const textPortfolio = document.querySelector(".projet-pro");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#3d3d3d";
          img.style.webkitFilter = "grayscale(100%)";
          img.style.filter = "grayscale(100%)";
          textPortfolio.style.color = "#3d3d3d";
        }

        //activer text blogoclock
        if (scroll < 5850) {
          const textPortfolio = document.querySelector(".blog-oclock");
          const divArticle = textPortfolio.closest(".box_article_portfolio");
          const img = divArticle.querySelector("img");
          const btnDetail = divArticle.querySelector(".btn_detail_portfolio");
          btnDetail.style.color = "#3d3d3d";
          img.style.webkitFilter = "grayscale(100%)";
          img.style.filter = "grayscale(100%)";
          textPortfolio.style.color = "#3d3d3d";
        }
      }
      scrollData = scroll;
    });
  },

  //effect title h1
  effectTitle: () => {
    const title = document.querySelector("#title");
    title.classList.add("anim_title");
  },

  //animate text slogan
  animSloganProfil: () => {
    const divSlogan = document.querySelector("#sousTitle");
    const tabStr = [
      "Développeur ReactJS et Angular",
      "Développeur ExpressJS",
      "Développeur Javascript",
      "Développeur PHP",
      "Amoureux de MongoDB",
      "Développeur WordPress ",
      "Développeur Web et Web mobile ",
    ];

    let indexTab = 0;
    //write motor
    const write = () => {
      divSlogan.textContent = "";
      let i = 0;
      const str2 = tabStr[indexTab];
      const intervalWrite = setInterval(() => {
        divSlogan.textContent += str2[i];
        i++;
        if (i === str2.length) {
          clearInterval(intervalWrite);
          indexTab++;
          if (indexTab < tabStr.length) {
            setTimeout(() => {
              write();
            }, 1000);
          }
        }
      }, 50);
    };

    write();
  },

  //events and action computer
  action: () => {
    //add opacity
    setTimeout(() => {
      const divSlogan = document.querySelector("#sousTitle");
      divSlogan.style.opacity = "1";
    }, 500);

    //action anim write slogan
    setTimeout(() => {
      app.animSloganProfil();
    }, 1800);

    app.seeMenuMobile();

    //title portfolio opacity 1 basic
    const titlePortfolio = document.querySelector("#title_portfolio");
    titlePortfolio.style.opacity = "1";
    titlePortfolio.style.transition = "all 0.2s";

    //title contact opacity 1 basic
    const titleContact = document.querySelector("#title_contact");
    titleContact.style.opacity = "1";
    titleContact.style.transition = "all 0.2s";

    //see copyrigth
    const date = new Date();
    const textCopyrigth = document.querySelector(".copyDate");
    textCopyrigth.textContent = `© ${date.getFullYear()} John Haimez`;

    // build ----------------------------------------------------------------
    document.addEventListener(
      "wpcf7mailsent",
      function (event) {
        location = "http://localhost/portfolio/#contact";
      },
      false
    );
  },

  //action for mobile
  actionPortfolio: () => {
    //see copyrigth
    const date = new Date();
    const textCopyrigth = document.querySelector(".copyDate");
    textCopyrigth.textContent = `© ${date.getFullYear()} John Haimez`;

    //fade for section page portfolio
    setTimeout(() => {
      const sectionPortfolio = document.querySelector(".section_page_article_portfolio");
      sectionPortfolio.style.opacity = "1";
    }, 500);
  },
  // function initial programme
  init: () => {
    console.log("Bienvenu sur la console, je savais que vous alliez venir ici, bonne visite !");
    const divTest = document.querySelector("#aPropos");
    if (divTest) {
      app.action();
      app.effectTitle();
      app.scrollAnim();
    } else {
      app.actionPortfolio();
      const menu = document.querySelector(".menu_mobile");
      menu.style.display = "none";
    }
  },
};

//load for page
window.addEventListener("load", app.init);
