'use client'
import { Button, Modal, ModalBody, ModalContent, ModalHeader, Radio, RadioGroup, Spacer, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { randomInt } from "./utils";
import { Send } from "lucide-react";
import superise from '@/images/animations/suprise.json'
import loading from '@/images/animations/loading.json'
import dynamic from "next/dynamic";

const DynamicComps = dynamic(() => import("./components/Animation"))

type ValidTopic = {
    topics: string[],
    count: number
}

async function fetchData() {
    // const res = await fetch('https://api.github.com/repos/topics/topics/topics')
    // let topicInfo: ValidTopic = await res.json()

    let topicInfo = {
        topics: [
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
        ],
        count: 20
    }
    return topicInfo
}


export default function MainPage() {
    const [vallidTopics, setValidTopics] = useState<ValidTopic | undefined>(undefined);
    const [topic, setTopic] = useState("");
    const [randomTopics, setRandomTopics] = useState<string[]>([]);
    const searchTools = [
        { name: "Google", websit: "https://www.google.com/search?q=" },
        { name: "Youtube", websit: "https://www.youtube.com/results?search_query=" },
        { name: "Tiwtter", websit: "https://twitter.com/search?q=" },
    ]
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function getTopics(vallidTopics: ValidTopic | undefined) {
        console.log(vallidTopics);
        if (vallidTopics === undefined) {
            console.log("error");
            return;
        }
        const min: number = 0, max: number = vallidTopics.count;
        setRandomTopics([]);
        for (let i = 0; i < 5; i++) {
            let random = randomInt(min, max);
            setRandomTopics((prev) => {
                return [...prev, vallidTopics.topics[random]];
            });
        }
    }

    useEffect(() => {
        fetchData().then((topicInfo) => {
            setValidTopics(topicInfo);
            getTopics(topicInfo);
        }).catch((err) => {
            console.error(err);
        });
    }, [])

    return (
        <div>
            <header className="flex flex-row justify-center items-center"></header>
            <Spacer y={10} />
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-bold">
                        Inspire Me
                    </h1>
                    <h2 className="text-2xl">
                        Get inspired by the latest news about your favorite topic
                    </h2>
                </div>

                <Spacer y={16} />
                <div className="flex flex-row gap-1">
                    <Button color="success" endContent={<Send />} onPress={(e) => {
                        onOpen();
                    }}>Inspire Me</Button>
                </div>

                <Spacer y={10} />
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
                        {searchTools.map((tool, index) => {
                            return (
                                <div>
                                    <Button color="primary" key={index} onPress={(e) => {
                                        if (topic === "") {
                                            alert("请选择一个话题");
                                            return;
                                        }
                                        window.open(tool.websit + topic, "_blank");
                                    }}>{tool.name}</Button>
                                    <Spacer y={1} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <DynamicComps
                                    animationData={loading}
                                    loop={false}
                                    autoplay={true}
                                    events={[{ name: "complete", handler: ()=>{
                                        getTopics(vallidTopics);
                                        setTopic("");
                                        onClose();
                                    } }]}
                                ></DynamicComps>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
                <ModalContent >
                    <div></div>
                </ModalContent>
            </Modal>
        </div>
    );
}