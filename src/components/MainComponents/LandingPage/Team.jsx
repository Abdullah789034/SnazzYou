import React from 'react';
import AdeeraImg from '../../../assets/images/team/Adeera.jpg';
import AlbertImg from '../../../assets/images/team/Albert.jpg';
import AlexandraImg from '../../../assets/images/team/Alexandra.jpg';
import AndrewImg from '../../../assets/images/team/Andrew.jpg';
import BernaImg from '../../../assets/images/team/Berna.jpg';
import CharlsImg from '../../../assets/images/team/Charls.jpg';
import ChristopherImg from '../../../assets/images/team/Christopher.jpg';
import DanielImg from '../../../assets/images/team/Daniel.jpg';
import MatthewImg from '../../../assets/images/team/Matthew.jpg';
import NicoleImg from '../../../assets/images/team/Nicole.jpg';

const teamMembers = [
    { name: 'Adeera', role: 'FINANCIAL PLANNER', imgSrc: AdeeraImg },
    { name: 'Albert', role: 'INVESTMENT ANALYST', imgSrc: AlbertImg },
    { name: 'Alexandra', role: 'PORTFOLIO MANAGER', imgSrc: AlexandraImg },
    { name: 'Andrew', role: 'RISK MANAGEMENT SPECIALIST', imgSrc: AndrewImg },
    { name: 'Berna', role: 'FINANCIAL ANALYST', imgSrc: BernaImg },
    { name: 'Charls', role: 'CYBERSECURITY SENIOR SPECIALIST', imgSrc: CharlsImg },
    { name: 'Christopher', role: 'CORPORATE FINANCE ADVISOR', imgSrc: ChristopherImg },
    { name: 'Daniel', role: 'BLOCKCHAIN SPECIALIST', imgSrc: DanielImg },
    { name: 'Matthew', role: 'CLIENT SERVICES MANAGER', imgSrc: MatthewImg },
    { name: 'Nicole', role: 'FINANCIAL OPERATIONS MANAGER', imgSrc: NicoleImg },
];

const Team = () => {
    return (
        <section className="our_team_sec text-center py-8">
            <h2 className="text-3xl text-gray-900 font-semibold mb-4 font-[Oswald]">MEET OUR TEAM</h2>
            <p className="mb-8">
                We pride ourselves on attracting the best and brightest in the business. <br />
                These are the people who will help you to achieve a safe and secure path to financial freedom.
            </p>
            <div className="image_main_container flex flex-wrap justify-center mx-auto w-11/12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                        <img src={member.imgSrc} alt={member.name} className="w-full sm:w-3/4 md:w-full mx-auto" />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity p-4">
                            <div className="text-white text-xl font-bold">{member.name}</div>
                            <div className="text-white text-lg mt-2">{member.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
