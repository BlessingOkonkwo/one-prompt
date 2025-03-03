import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      nunito: "var(--font-nunito-sans)",
      albert: "var(--font-albert-sana)",
      inter: "var(--font-inter)",
      BalloBhaina: ["Baloo Bhaina", "sans-serif"], // Define the custom font class
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      authBackground: "var(--auth-background)",
      sidebar: "var(--sidebar)",
      sidebarForeground: "var(--sidebar-foreground)",
      sidebarActive: "var(--sidebar-active)",
      sidebarActiveForeground: "var(--sidebar-active-foreground)",
      sidebarHeading: "var(--sidebar-heading)",
      sidebarSub: "var(--sidebar-sub)",
      textarea: "var(--textarea)",
      textareaForeground: "var(--textarea-foreground)",
      textareaPlaceholder: "var(--textarea-placeholder)",
      card: "var(--card)",
      cardForeground: "var(--card-foreground)",
      cardTitle: "var(--card-title)",
      cardDropdown: "var(--card-dropdown)",
      cardBorder: "var(--card-border)",
      cardActive: "var(--card-active)",
      nav: "var(--nav)",
      navCategory: "var(--nav-category)",
      logoTint: "var(--logo_tint)",
      profile: "var(--profile)",
      profileSub: "var(--profile-sub)",
      navBorder: "var(--nav-border)",
      promptBtn: "var(--prompt-btn)",
      promptBtnForeground: "var(--prompt-btn-foreground)",
      promptBtnBorder: "var(--prompt-btn-border)",
      promptBtnActive: "var(--prompt-btn-active)",
      promptBtnActiveForeground: "var(--prompt-btn-active-foreground)",
      promptBtnIcon: "var(--prompt-btn-icon)",
      promptBtnActiveIcon: "var(--prompt-btn-active-icon)",
      suggestionCard: "var(--suggestion-card)",
      suggestionCardTitle: "var(--suggestion-card-title)",
      suggestionCardSub: "var(--suggestion-card-sub)",
      suggestionCardBorder: "var(--suggestion-card-border)",
      messageCard: "var(--message-card)",
      messageCardForeground: "var(--message-card-foreground)",
      aiMessageCard: "var(--ai-message-card)",
      aiMessageCardForeground: "var(--ai-message-card-foreground)",
      table: "var(--table)",
      tableForeground: "var(--table-foreground)",
      tableHeader: "var(--table-header)",
      tableBorder: "var(--table-border)",
      primary: "var(--primary)",
      primaryForeground: "var(--primary-foreground)",
      heading: "var(--heading)",
      subHeading: "var(--sub-heading)",
      input: "var(--input)",
      inputBorder: "var(--input-border)",
      inputForeground: "var(--input-foreground)",
      inputPlaceholder: "var(--input-placeholder)",
      inputLabel: "var(--input-label)",
      authHeading: "var(--auth-heading)",
      authSubHeading: "var(--auth-sub-heading)",
      inputError: "var(--input-error)",
      disabledBtn: "var(--disabled-btn)",
      prompt: "var(--prompt)",
      error: "var(--error)",
      appSub: "var(--app-sub)",
      mainCategories: "var(--main-categories)",
      iconColor: "var(--icon-color)",
      iconHover: "var(--icon-hover)",
      dropdown: "var(--dropdown)",
      dropdownBorder: "var(--dropdown-border)",
      backIcon: "var(--back-icon)",
      mode: "var(--mode)",
      subCategory: "var(--sub-category)",
      subCategoryBorder: "var(--sub-category-border)",
      categoryCardIcon: "var(--category-card-icon)",
      categoryCardIconActive: "var(--category-card-icon-active)",

      action: "var(--action)",
      border: "var(--border)",
      main: "var(--main)",
      popover: "var(--popover)",
      popoverForeground: "var(--popover-foreground)",
      secondary: "var(--secondary)",
      secondaryForeground: "var(--secondary-foreground)",
      muted: "var(--muted)",
      mutedForeground: "var(--muted-foreground)",
      accent: "var(--accent)",
      accentForeground: "var(--accent-foreground)",
      destructive: "var(--destructive)",
      destructiveForeground: "var(--destructive-foreground)",
      ring: "var(--ring)",
      ringPrimary: "var(--ring-primary)",
      ringSecondary: "var(--ring-secondary)",
      primaryBtnHoverShadow: "var(--primary-btn-hover-shadow)",
      primarySmBtnHoverShadow: "var(--primary-sm-btn-hover-shadow)",
      secondaryBtnHoverShadow: "var(--secondary-btn-hover-shadow)",
      destructiveBtnHoverShadow: "var(--destructive-btn-hover-shadow)",
      secondarySmBtnHoverShadow: "var(--secondary-sm-btn-hover-shadow)",
      info: "var(--info)",
      infoBg: "var(--info-bg)",
      success: "var(--success)",
      success100: "var(--success-100)",
      success200: "var(--success-200)",
      warning: "var(--warning)",
      warningBg: "var(--warning-bg)",
      coolgrey: "var(--coolgrey)",
      coolgreyForeground: "var(--coolgrey-foreground)",
      radius: "var(--radius)",
      spacing: "var(--spacing)",
      topbarHeight: "var(--topbar-height)",
      sidebarWidth: "var(--sidebar-width)",
      skeletonGradient: "var(--skeleton-gradient)",
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "caret-blink": "caret-blink 1.25s ease-out infinite",
      "dots-animate": "caret-blink 1.25s ease-out infinite",
      "chat-up": "caret-blink 1.25s ease-out infinite",
    },
  },
};
export const darkMode = "media";
export const plugins = [heroui({
  layout: {
    borderWidth: {
      small: "0.6px", // border-small
      medium: "1px", // border-medium
      large: "2px", // border-large
    }
  },
  themes: {
    // light: {
    //   colors: {
    //     default: "#ffffff",
    //     background: "#FFFFFF",
    //     foreground: "#495057",
    //     secondary: "#FDAF3B", // or 50 to 900 DEFAULT
    //     primary: {
    //       //... 50 to 900
    //       foreground: "#CED4DA",
    //       DEFAULT: "#DB353A",
    //     },
    //     divider: {
    //       DEFAULT: "#1c1f3532",
    //     },
    //     focus: "#FDAF3B"
    //     // ... rest of the colors
    //   },
    // },
    // dark: {
    //   colors: {
    //     background: "#212529",
    //     foreground: "#CED4DA",
    //     secondary: "#444A64", // or 50 to 900 DEFAULT
    //     primary: {
    //       //... 50 to 900
    //       foreground: "#CED4DA",
    //       DEFAULT: "#DB353A",
    //     },
    //     divider: {
    //       DEFAULT: "#FFFFFF",
    //     },
    //     focus: "#FDAF3B"
    //   },
    //   // ... rest of the colors
    // },
  },
}
)];
