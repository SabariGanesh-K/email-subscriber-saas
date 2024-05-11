import Banner from "@/modules/home/elements/banner";
import Branding from "@/modules/home/elements/branding";
import Header from "@/shared/widgets/header/header";
import React from "react";
import Benefits from "./elements/benefits";
import FeatureHighlight from "./elements/feature.highlight";
import Pricing from "./elements/pricing";
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
