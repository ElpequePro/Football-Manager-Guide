import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function Goalkeeper() {

    return (
        <main>
            <h1>Goalkeeper</h1>
            <div className="description">
                <p>The goalkeeper is the last line of defense, responsible for preventing the opposition from scoring. Modern goalkeepers are also increasingly involved in build-up play and initiating attacks.</p>
            </div>
            <article>
                <h2 className="role-title">Goalkeeper (GK)</h2>
                <p className="description">A traditional goalkeeper whose primary responsibility is to stop shots and command his area. He will generally stay on his line and distribute the ball quickly to start counter-attacks.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={1} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Stays close to goal line, focuses purely on shot-stopping and commanding his area. Rarely ventures outside the penalty box and prioritizes safety first in distribution.</p>
                    <img src="gk_defend_heatmap.jpg" alt="Goalkeeper Defend Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Sweeper Keeper (SK)</h2>
                <p className="description">A more modern interpretation of the position, the sweeper keeper is comfortable leaving his area to act as a sweeper behind the defense, particularly when facing through balls. Requires good anticipation, acceleration and passing skills.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={2} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Will sweep up behind defense but generally stays closer to his goal than other mentalities. Acts as a safety net but doesn't actively participate in build-up play.</p>
                    <img src="sk_defend_heatmap.jpg" alt="Sweeper Keeper Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                    </ul>
                    <p className="mentality-description">Proactive in sweeping up through balls and participates actively in build-up play. Will often function as an extra passing option for defenders under pressure.</p>
                    <img src="sk_support_heatmap.jpg" alt="Sweeper Keeper Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                    </ul>
                    <p className="mentality-description">Extremely aggressive in sweeping up through balls and often acts as an 11th outfield player in possession. Takes high risks with positioning and distribution to support attacking play.</p>
                    <img src="sk_attack_heatmap.jpg" alt="Sweeper Keeper Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default Goalkeeper;
