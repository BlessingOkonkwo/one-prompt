import GeneralHealthCategoryIcon from "./pattern/shared/icons/general-health-category-icon";
import HumanCapitalCategoryIcon from "./pattern/shared/icons/human-capital-category-icon";
import ProductsCategoryIcon from "./pattern/shared/icons/products-category-icon";
import FinancialCategoryIcon from "@/pattern/shared/icons/financial-category-icon";
import QueryCategoryIcon from "./pattern/shared/icons/query-category-icon";
import NipCategoryIcon from "./pattern/shared/icons/nip-category-icon";
import OnebankLogo from "./pattern/shared/icons/onebank-logo";
import SpectaLogo from "./pattern/shared/icons/specta-logo";
import BancaLogo from "./pattern/shared/icons/banca-logo";
import SwitchLogo from "./pattern/shared/icons/switch-logo";
import HamzaLogo from "./pattern/shared/icons/hamza-logo";
import OnboardingLogo from "./pattern/shared/icons/onboarding-logo";
import { ReactElement, ReactNode } from "react";
import ProductsCardIcon from "./pattern/shared/icons/products-card-icon";
import FinancialCardIcon from "./pattern/shared/icons/financial-card-icon";
import HumanCapitalCardIcon from "./pattern/shared/icons/human-capital-card-icon";
import GeneralHealthCardIcon from "./pattern/shared/icons/general-health-card-icon";
import QueryBotCardIcon from "./pattern/shared/icons/query-bot-card-icon";
import NipCardIcon from "./pattern/shared/icons/nip-card-icon";

interface ICategory {
  title: string;
  icon: ReactNode;
  cardIcon: ReactNode;
  description: string;
  label: string;
  position: string;
  subCategories?: ReactNode[];
}

export const categoriesList: ICategory[] = [
  {
    title: "NIP Category Engine",
    icon: <NipCategoryIcon />,
    cardIcon: <NipCardIcon />,
    description:
      "This engine provides you with all details about NIP queries and financial transactions.",
    label: "NIP Query Engine",
    position: "middle-left",
  },
  {
    title: "Financial Advisory",
    icon: <FinancialCategoryIcon />,
    cardIcon: <FinancialCardIcon />,
    description:
      "This engine provides you with all details about Financial Advisory and financial portfolios.",
    label: "Financial Advisory",
    position: "top-left",
  },
  {
    title: "Products",
    icon: <ProductsCategoryIcon />,
    cardIcon: <ProductsCardIcon />,
    description:
      "This engine provides you with all details about the different products and offerings.",
    label: "Products",
    position: "top-right",
    subCategories: [
      <OnebankLogo />,
      <SpectaLogo />,
      <BancaLogo />,
      <SwitchLogo />,
    ],
  },
  {
    title: "General Health",
    icon: <GeneralHealthCategoryIcon />,
    cardIcon: <GeneralHealthCardIcon />,
    description:
      "This engine provides you with all details about General Health queries.",
    label: "General Health",
    position: "bottom-right",
  },
  {
    title: "Human Capital",
    icon: <HumanCapitalCategoryIcon />,
    cardIcon: <HumanCapitalCardIcon />,
    description:
      "This engine provides you with all details about Human Capital queries.",
    label: "Human Capital",
    position: "middle-right",
    subCategories: [<HamzaLogo />, <OnboardingLogo />],
  },
  {
    title: "Query Bot",
    icon: <QueryCategoryIcon />,
    cardIcon: <QueryBotCardIcon />,
    description: "This engine provides you with all details about Query Bot",
    label: "Query Bot",
    position: "bottom-left",
  },
];
