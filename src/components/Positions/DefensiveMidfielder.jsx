import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function DefensiveMidfielder() {

    return (
        <main>
            <h1 id="defensive-midfielder">Defensive Midfielder</h1>
            <div className="description">
                <p>Defensive midfielders provide the crucial link between defense and attack, specializing in breaking up opposition play, shielding the backline, and initiating attacks. Their positioning and decision-making are vital for team structure.</p>
            </div>
            <article>
            <h2 id="defensive-midfielder-role" className="role-title">Defensive Midfielder</h2>
                <p className="description">The standard holding midfielder who focuses on defensive stability while providing simple distribution to more creative players.</p>
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
                                <StarRating rating={2} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Stays deep to protect the defense, intercepting passes and making simple distributions. Rarely ventures forward, maintaining disciplined positioning.</p>
                    <img src="dm_defend_heatmap.jpg" alt="Defensive Midfielder Defend Heatmap" className="heatmap" />
                </section>
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
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Balances defensive duties with more adventurous positioning, occasionally joining attacks while maintaining defensive awareness.</p>
                    <img src="dm_support_heatmap.jpg" alt="Defensive Midfielder Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="deep-lying-playmaker-role" className="role-title">Deep Lying Playmaker</h2>
                <p className="description">A creative pivot who operates in front of the defense, dictating play with intelligent passing while providing defensive cover.</p>
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
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Stays deep to receive the ball from defenders and initiate attacks with precise passing. Maintains defensive positioning while orchestrating play.</p>
                    <img src="dlp_defend_heatmap.jpg" alt="Deep Lying Playmaker Defend Heatmap" className="heatmap" />
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">More adventurous in positioning, stepping into midfield to influence play while still providing defensive cover when needed.</p>
                    <img src="dlp_support_heatmap.jpg" alt="Deep Lying Playmaker Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="ball-winning-midfielder-role" className="role-title">Ball Winning Midfielder</h2>
                <p className="description">An aggressive midfielder who specializes in winning back possession through tackles and interceptions, then distributing simply to teammates.</p>
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
                                <StarRating rating={2} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                        <li>Tackle Harder</li>
                    </ul>
                    <p className="mentality-description">Focuses purely on defensive duties, aggressively closing down opponents and winning the ball in dangerous areas before making simple passes.</p>
                    <img src="bwm_defend_heatmap.jpg" alt="Ball Winning Midfielder Defend Heatmap" className="heatmap" />
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
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Tackle Harder</li>
                    </ul>
                    <p className="mentality-description">Presses higher up the pitch to win possession while still maintaining defensive responsibilities. More involved in transitional play.</p>
                    <img src="bwm_support_heatmap.jpg" alt="Ball Winning Midfielder Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="anchor-role" className="role-title">Anchor</h2>
                <p className="description">A purely defensive midfielder who sits deep to protect the backline, intercepting passes and clearing danger without venturing forward.</p>
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
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Stays permanently positioned in front of the center-backs, breaking up attacks and distributing simply. The ultimate defensive shield.</p>
                    <img src="anchor_defend_heatmap.jpg" alt="Anchor Defend Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="half-back-role" className="role-title">Half Back</h2>
                <p className="description">A unique defensive midfielder who drops between center-backs in possession to create a back three, providing extra defensive cover.</p>
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
                                <StarRating rating={1.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Drops deep to form a back three in possession, providing defensive stability and an extra passing option for building from the back.</p>
                    <img src="hb_defend_heatmap.jpg" alt="Half Back Defend Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="regista-role" className="role-title">Regista</h2>
                <p className="description">A deep-lying playmaker with complete creative freedom, orchestrating play from deep positions while still providing defensive cover.</p>
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
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Roam From Position</li>
                    </ul>
                    <p className="mentality-description">The team's primary creative hub from deep positions, given license to dictate tempo and try ambitious passes while maintaining positional discipline.</p>
                    <img src="regista_support_heatmap.jpg" alt="Regista Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="roaming-playmaker-role" className="role-title">Roaming Playmaker</h2>
                <p className="description">A dynamic midfielder who moves across the pitch to find space and influence play, combining defensive work with creative passing.</p>
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
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Roam From Position</li>
                    </ul>
                    <p className="mentality-description">Constantly moves to find space and receive the ball, linking defense and attack with intelligent movement and passing while still contributing defensively.</p>
                    <img src="rp_support_heatmap.jpg" alt="Roaming Playmaker Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="segundo-volante-role" className="role-title">Segundo Volante</h2>
                <p className="description">A dynamic box-to-box midfielder who operates behind a traditional playmaker, making late runs into the box while providing defensive cover.</p>
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Makes supporting runs from deep, arriving late in the box while maintaining defensive responsibilities. The balanced option for this role.</p>
                    <img src="sv_support_heatmap.jpg" alt="Segundo Volante Support Heatmap" className="heatmap" />
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
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Highly aggressive with forward runs, frequently arriving in scoring positions while still expected to track back when needed.</p>
                    <img src="sv_attack_heatmap.jpg" alt="Segundo Volante Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default DefensiveMidfielder;