// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Some of my ongoing and previous projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-coursework",
          title: "coursework",
          description: "Work from courses I&#39;ve taken",
          section: "Navigation",
          handler: () => {
            window.location.href = "/coursework/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here&#39;s a PDF of my latest CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-graph-convolutional-networks-as-extensions-of-cnns",
          title: 'Graph Convolutional Networks (as extensions of CNNs)',
          description: "A written version of the presentation I gave for the May 2025 UIC MSCS Dept. Directed Reading Program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GCN.html";
            },},{id: "projects-from-monte-carlo-simulations-to-analytic-solutions-of-ising-models",
          title: 'From Monte Carlo Simulations to Analytic Solutions of Ising Models',
          description: "A summary of my work in the UIC MSCS Department Summer 2025 Directed Reading Program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StatMech.html";
            },},{id: "projects-cell-quantification-toolkit",
          title: 'Cell Quantification Toolkit',
          description: "A Fiji plugin for automated image quantification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cell-quantification-toolkit.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
