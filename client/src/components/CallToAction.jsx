import React from "react";
import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Team Wellness Collective</h2>
        <p className="text-gray-500 my-2">
          Empowering Lives & Amplifying Voices Through Sports & Fitness
        </p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl">
          <a
            href="https://www.thewellnesscollective.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Button>
      </div>
      <div className="p-2 flex-1">
        <img src="/images/wellnesslogo.png" />
      </div>
    </div>
  );
}
