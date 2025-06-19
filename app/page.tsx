import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className={"text-2xl underline"}>Popular Companions</h1>

      <section className={"home-section"}>
        <CompanionCard
          id={"123"}
          name={"Nora the Explorer"}
          subject={"Science"}
          topic={"The addiction curve"}
          duration={45}
          color={"#efaefe"}
        />
        <CompanionCard
          id={"32"}
          name={"Nora the Explorer"}
          subject={"English"}
          topic={"The addiction curve"}
          duration={45}
          color={"#ffeffe"}
        />
        <CompanionCard
          id={"22"}
          name={"Nora the Explorer"}
          subject={"Literature"}
          topic={"The addiction curve"}
          duration={45}
          color={"#fbefae"}
        />
      </section>

      <section className={"home-section"}>
        <CompanionsList
          title={"Recently completed sessions"}
          companions={recentSessions}
          classNames={"w-2/3 max-lg:w-full"}
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
