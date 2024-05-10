import Banner from "@/modules/home/features/banner";
import Branding from "@/modules/home/features/branding";
import Header from "@/shared/widgets/header/header";
import React from "react";
import Benefits from "./features/benefits";
import FeatureHighlight from "./features/feature.highlight";
import Pricing from "./features/pricing";
import Footer from "@/shared/widgets/footer/footer";

export default function Home() {
  return (
 <div>
<Header/>
<Banner/>
<Branding/>
<Benefits/>
<FeatureHighlight/>
<Pricing/>
<Footer/>
 </div>
  );
}
