import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightCard from "./SpotlightCard";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillItem = ({ name, pct }) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-20px" });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setProgress(pct), 200);
            return () => clearTimeout(timer);
        } else {
            setProgress(0);
        }
    }, [isInView, pct]);

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="font-bold text-white/90">{name}</span>
                <Badge variant="secondary" className="bg-[#00BCD4]/20 text-[#00BCD4] hover:bg-[#00BCD4]/30">
                    {pct}%
                </Badge>
            </div>
            <Progress 
                value={progress} 
                className="h-2 bg-white/10" 
                indicatorClassName="bg-[#00BCD4] transition-all duration-1000 ease-out"
            />
        </div>
    );
};

const SkillsSection = ({ currentSec }) => {
    const technicalSkills = [
        { name: "HTML & CSS", pct: 90 },
        { name: "JavaScript", pct: 80 },
        { name: "Bootstrap", pct: 60 },
        { name: "Java SE", pct: 65 },
        { name: "Python", pct: 50 },
    ];

    const professionalSkills = [
        { name: "Comunicación", pct: 85 },
        { name: "Trabajo en equipo", pct: 85 },
        { name: "Resolución de problemas", pct: 80 },
        { name: "Creatividad", pct: 75 },
        { name: "Dedicación", pct: 90 },
        { name: "Responsabilidad", pct: 90 },
        { name: "Liderazgo", pct: 70 },
    ];

    return (
        <section id="skills" className="py-20 px-5 relative transition-colors duration-500" style={{ backgroundColor: currentSec }}>
            <div className="max-w-[1200px] mx-auto relative z-10">
                <h2 className="text-5xl font-['Righteous'] text-center mb-12 text-white/90 drop-shadow-md">Skills</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technical Skills Card */}
                    <SpotlightCard className="shadow-xl backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="text-3xl font-['Righteous'] text-center text-[#00BCD4]">Technical Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {technicalSkills.map((skill, i) => (
                                <SkillItem key={i} name={skill.name} pct={skill.pct} />
                            ))}
                        </CardContent>
                    </SpotlightCard>

                    {/* Professional Skills Card */}
                    <SpotlightCard className="shadow-xl backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="text-3xl font-['Righteous'] text-center text-[#00BCD4]">Professional Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {professionalSkills.map((skill, i) => (
                                <SkillItem key={i} name={skill.name} pct={skill.pct} />
                            ))}
                        </CardContent>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};


export default SkillsSection;
