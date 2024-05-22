'use client'
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Spacer } from "@nextui-org/react";
import Header from "./header/page";
import { Send } from "lucide-react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [websit, setWebsit] = useState("");
  const [randomTopics, setRandomTopics] = useState<string[]>([]);

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      <Header></Header>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold">
            Inspire Me
          </h1>
          <h2 className="text-2xl">
            Get inspired by the latest news about your favorite topic
          </h2>
        </div>

        <Spacer y={10} />
        <div className="flex flex-row gap-1">

          <Button color="success" endContent={<Send />} onPress={(e) => {
            let topics = [
              "量子计算机",
              "绿色能源",
              "古埃及文明",
              "VR教学应用",
              "深海生物探秘",
              "火星探测计划",
              "比特币市场",
              "冥想减压法",
              "AI医疗影像",
              "全球变暖",
              "珊瑚礁保护",
              "基因疗法",
              "纳米机器人",
              "大数据分析",
              "云存储安全",
              "物联网家居",
              "5G网络速度",
              "机器学习算法",
              "区块链应用",
              "网络攻防战"
            ];
            const min = 0;
            const max = topics.length;
            for (let i = 0; i < 5; i++) {
              let random = randomInt(min, max);
              setRandomTopics((prev) => {
                return [...prev, topics[random]];
              });
            }
            
          }}>Inspire Me</Button>
        </div>

        <Spacer y={5} />
        <div className="flex flex-row gap-1 justify-center">

          <div className="flex flex-col gap-1 justify-center align-center">
            <RadioGroup
              value={topic}
              onValueChange={setTopic}
            >
              {randomTopics.map((topic, index) => {
                return (
                  <Radio key={index} value={topic}>{topic}</Radio>
                );
              })}
            </RadioGroup>
          </div>

          <Spacer x={5} />
          <div className="flex flex-col gap-1 justify-center align-center">
            <span className="text-2xl font-bold">&#x2192;</span>
          </div>

          <Spacer x={5} />
          <div className="flex flex-col gap-1 justify-center align-center">
            <RadioGroup
              value={websit}
              onValueChange={setWebsit}
            >
              <Radio value="https://twitter.com/search?q=">tiwtter</Radio>
              <Radio value="https://www.google.com/search?q=">Google</Radio>
              <Radio value="https://www.youtube.com/results?search_query=">Youtube</Radio>
            </RadioGroup>
          </div>

          <Spacer x={5} />
          <div className="flex flex-col gap-1 justify-center align-center">
            <Button color="primary" onPress={(e) => {
              window.open(websit + topic, "_blank");
            }}>Let’s Go！</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
