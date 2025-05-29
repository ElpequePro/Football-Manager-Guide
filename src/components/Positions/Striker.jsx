import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function Striker() {

    return (
        <main>
            <h1>Striker</h1>
            <div className="description">
                <p>Strikers are the focal point of the attack, responsible for converting chances and creating opportunities for teammates. Their roles range from traditional goal poachers to creative forwards who drop deep, with each role offering different tactical possibilities.</p>
            </div>
            <article>
                <h2 className="role-title">Deep Lying Forward</h2>
                <p className="description">A creative striker who drops deep to link play between midfield and attack while still posing a goal threat.</p>
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Hold Up Ball</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">Drops deep to receive the ball and bring teammates into play while still making runs into the box when opportunities arise.</p>
                    <img src="dlf_support_heatmap.jpg" alt="Deep Lying Forward Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Hold Up Ball</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">More aggressive in making forward runs after dropping deep, posing a greater direct goal threat while still linking play.</p>
                    <img src="dlf_attack_heatmap.jpg" alt="Deep Lying Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Advanced Forward</h2>
                <p className="description">The primary goal threat who leads the line with constant runs behind the defense.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">Constantly looks to break the defensive line and get into goalscoring positions with minimal defensive responsibilities.</p>
                    <img src="af_attack_heatmap.jpg" alt="Advanced Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Target Forward</h2>
                <p className="description">A physical presence up front who uses strength to hold up the ball and bring teammates into play.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Hold Up Ball</li>
                    </ul>
                    <p className="mentality-description">Focuses on winning aerial duels and holding up play to bring teammates into the game while contributing defensively.</p>
                    <img src="tf_support_heatmap.jpg" alt="Target Forward Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Hold Up Ball</li>
                    </ul>
                    <p className="mentality-description">Uses physical attributes to both create and score goals while offering minimal defensive contribution.</p>
                    <img src="tf_attack_heatmap.jpg" alt="Target Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Poacher</h2>
                <p className="description">A pure goalscorer who specializes in finding space in the box to finish chances.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                    </ul>
                    <p className="mentality-description">Focuses exclusively on getting into goalscoring positions with no defensive responsibilities or link-up play.</p>
                    <img src="poacher_attack_heatmap.jpg" alt="Poacher Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Complete Forward</h2>
                <p className="description">The ultimate all-round striker capable of both creating and scoring goals in various ways.</p>
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Roam From Positions</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">Drops deep to link play while still posing a goal threat, contributing to all phases of attacking play.</p>
                    <img src="cf_support_heatmap.jpg" alt="Complete Forward Support Heatmap" className="heatmap" />
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
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Roam From Positions</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">More aggressive in pursuing goals while still contributing to build-up play when needed.</p>
                    <img src="cf_attack_heatmap.jpg" alt="Complete Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Pressing Forward</h2>
                <p className="description">A hard-working striker who leads from the front with aggressive pressing and defensive contribution.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={2.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take Fewer Risks</li>
                        <li>Hold Up Ball</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                        <li>Close Down More</li>
                        <li>Tackle Harder</li>
                    </ul>
                    <p className="mentality-description">Focuses primarily on pressing defenders and winning the ball high up the pitch while offering a limited goal threat.</p>
                    <img src="pf_defend_heatmap.jpg" alt="Pressing Forward Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Hold Up Ball</li>
                        <li>Close Down More</li>
                        <li>Tackle Harder</li>
                    </ul>
                    <p className="mentality-description">Balances pressing duties with attacking contributions, working hard to win possession and create chances.</p>
                    <img src="pf_support_heatmap.jpg" alt="Pressing Forward Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Move Into Channels</li>
                        <li>Close Down More</li>
                        <li>Tackle Harder</li>
                    </ul>
                    <p className="mentality-description">More aggressive in pursuing goals while still maintaining high pressing intensity and defensive work rate.</p>
                    <img src="pf_attack_heatmap.jpg" alt="Pressing Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Trequartista</h2>
                <p className="description">A creative free spirit given complete freedom to roam and find space between midfield and attack.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Roam From Position</li>
                        <li>Move Into Channels</li>
                        <li>Ease Off Tackles</li>
                    </ul>
                    <p className="mentality-description">Ignores defensive responsibilities completely, focusing solely on finding space and creating chances through individual brilliance.</p>
                    <img src="treq_attack_heatmap.jpg" alt="Trequartista Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">False Nine</h2>
                <p className="description">A deep-lying creative forward who drops into midfield to create space for teammates' runs.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                    </ul>
                    <p className="mentality-description">Drops deep to receive the ball and create chances, pulling defenders out of position to create space for teammates.</p>
                    <img src="f9_support_heatmap.jpg" alt="False Nine Support Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default Striker;