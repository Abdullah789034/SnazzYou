import React from 'react';
import bankbg from '../../../assets/images/bank-bg.jpg';
import img from '../../../assets/images/8.png';

const Defi = () => {
    return (
        <div
            className="w-full h-[580px] flex items-center justify-center"
            style={{ backgroundImage: `url(${bankbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center justify-center text-center space-y-4">
                <img src={img} alt="" className="w-1/3 h-auto" />
                <div className="w-2/4 text-white space-y-4 text-lg">
                    <p>
                        Welcome to the future of finance
                        <strong><span style={{ color: "#fff04f" }}> Decentralized Finance, or DeFi</span></strong>.
                        It's the financial revolution you've been waiting for.
                    </p>
                    <p>
                        Gone are the days of middlemen like banks and brokerages
                        dictating your financial transactions.
                        <strong><span style={{ color: "#fff04f" }}>
                            With DeFi, power is returned to you, the individual, through
                            blockchain-based smart contracts
                        </span></strong> that guarantee transparency in every transaction,
                        right down to the smallest fee.
                    </p>
                    <p>
                        Imagine a world where you have complete control over your
                        financial decisions, where the playing field is level and
                        everyone has access to the same opportunities
                        <strong><span style={{ color: "#fff04f" }}> That's the promise of DeFi</span></strong>.
                    </p>
                    <p>
                        But it's not just about breaking free from the chains of
                        traditional banking—it's about unleashing a wave of innovation
                        and creativity that will shape the future of finance.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Defi;
