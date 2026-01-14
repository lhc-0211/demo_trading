import type { TFunction } from "i18next";

export const buildDevIntroSteps = (t: TFunction) => [
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.react19.title"),
      description: t("tour.devTour.react19.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.vite.title"),
      description: t("tour.devTour.vite.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.typescript.title"),
      description: t("tour.devTour.typescript.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.realtime.title"),
      description: t("tour.devTour.realtime.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.backend.title"),
      description: t("tour.devTour.backend.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.codeOrg.title"),
      description: t("tour.devTour.codeOrg.desc"),
    },
  },

  {
    element: "#master-avatar",
    popover: {
      title: t("tour.devTour.contact.title"),
      description: t("tour.devTour.contact.desc"),
    },
  },
];

export const buildTourIntroSteps = (t: TFunction) => [
  {
    element: "#goblin-avatar",
    popover: {
      title: t("tour.intro.step1.title"),
      description: `
        <div>${t("tour.intro.step1.desc1")}</div>
        <div>${t("tour.intro.step1.desc2")}</div>
      `,
    },
  },
  {
    element: "#goblin-avatar",
    popover: {
      title: t("tour.intro.step2.title"),
      description: `
        <div>${t("tour.intro.step2.desc1")}</div>
        <div>${t("tour.intro.step2.desc2")}</div>
      `,
    },
  },
  {
    element: "#goblin-avatar",
    popover: {
      title: t("tour.intro.step3.title"),
      description: `
        <div style="margin-bottom: 8px">
          ${t("tour.intro.step3.desc")}
        </div>
        <div style="display: flex; gap: 12px;">
          <div id="tour-user" class="driver-btn-user">
            ${t("tour.intro.step3.roleUser")}
          </div>
          <div id="tour-dev" class="driver-btn-dev">
            ${t("tour.intro.step3.roleDev")}
          </div>
        </div>
      `,
    },
  },
];

export const buildUserIntroSteps = (t: TFunction) => [
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.version.title"),
      description: `<div>${t("tour.userIntro.version.desc")}</div>`,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.scope.title"),
      description: `<div>${t("tour.userIntro.scope.desc")}</div>`,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.priceboard.title"),
      description: `<div>${t("tour.userIntro.priceboard.desc")}</div>`,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.order.title"),
      description: `<div>${t("tour.userIntro.order.desc")}</div>`,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.feature.title"),
      description: `
        <div>
          ${t("tour.userIntro.feature.desc")}
          <ul style="margin: 6px 0 0 16px">
            <li>${t("tour.userIntro.feature.darkMode")}</li>
            <li>${t("tour.userIntro.feature.i18n")}</li>
            <li>${t("tour.userIntro.feature.custom")}</li>
          </ul>
        </div>
      `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: t("tour.userIntro.start.title"),
      description: `
        <div style="margin-bottom: 6px">
          ${t("tour.userIntro.start.desc")}
        </div>
        <div>
          ${t("tour.userIntro.start.contact")}
          <b style="color:#2563eb"> lhc021120@gmail.com</b>
        </div>
      `,
    },
  },
];

export const buildHelpSteps = (t: TFunction) => [
  {
    element: "#villager-avatar",
    popover: {
      title: t("tour.help.title"),
      description: `
        <div>${t("tour.help.question")}</div>
        <div style="margin-bottom: 6px">
          ${t("tour.help.hint")}
        </div>
        <div style="display: flex; gap: 10px;">
          <div id="help-priceboard">${t("tour.help.priceboard")}</div>
          <div id="help-order">${t("tour.help.order")}</div>
          <div id="help-feature">${t("tour.help.feature")}</div>
          <div id="help-tech">${t("tour.help.technology")}</div>
          <div id="help-contact">${t("tour.help.contact")}</div>
        </div>
      `,
    },
  },
];
