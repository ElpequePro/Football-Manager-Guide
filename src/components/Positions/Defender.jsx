import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function Defender() {

    return (
        <main>
            <h1>Defender</h1>
            <div className="description">
                <p>Defenders are responsible for stopping the opposition's attacks and protecting their goal. They play a crucial role in maintaining the team's defensive structure and initiating attacks from the back.</p>
            </div>
            <article>
                <h2 className="role-title">Central Defender</h2>
                <p className="description">A traditional central defender focused on marking, tackling, and clearing danger. Typically strong in the air and excellent at positioning.</p>
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
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Focuses purely on defensive duties, marking tightly and clearing danger. Rarely ventures forward and maintains disciplined positioning.</p>
                    <img src="cd_defend_heatmap.jpg" alt="Central Defender Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Stopper</span>
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
                    </ul>
                    <p className="mentality-description">Aggressively steps out of defense to close down opponents and win the ball higher up the pitch. Takes more risks in defensive positioning.</p>
                    <img src="cd_stopper_heatmap.jpg" alt="Central Defender Stopper Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Cover</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={1.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Provides cover for more aggressive defensive partners, sweeping up behind the defensive line and using anticipation to intercept passes.</p>
                    <img src="cd_cover_heatmap.jpg" alt="Central Defender Cover Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Libero</h2>
                <p className="description">A creative defender who operates behind the defensive line, starting attacks with intelligent passing while providing defensive cover.</p>
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
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Focuses on defensive positioning and initiating attacks from deep. Provides a safety net behind the defense while distributing the ball intelligently.</p>
                    <img src="liber_defend_heatmap.jpg" alt="Libero Defend Heatmap" className="heatmap" />
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
                    <p className="mentality-description">More adventurous in possession, stepping into midfield to support attacks while maintaining defensive responsibilities.</p>
                    <img src="liber_support_heatmap.jpg" alt="Libero Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Ball Playing Defender</h2>
                <p className="description">A central defender with excellent technical skills who looks to start attacks with precise passing while maintaining solid defensive fundamentals.</p>
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
                                <StarRating rating={2.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Maintains defensive discipline while looking to distribute the ball intelligently from the back. Takes fewer risks in possession than more attacking mentalities.</p>
                    <img src="bpd_defend_heatmap.jpg" alt="Ball Playing Defender Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Stopper</span>
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
                        <li>Take More Risks</li>
                    </ul>
                    <p className="mentality-description">Steps out of defense aggressively to win the ball and start attacks quickly. Takes more risks both defensively and in possession.</p>
                    <img src="bpd_stopper_heatmap.jpg" alt="Ball Playing Defender Stopper Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Cover</span>
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
                        <li>Take More Risks</li>
                    </ul>
                    <p className="mentality-description">Provides defensive cover while using excellent passing range to launch attacks from deep positions. Reads the game well to intercept passes.</p>
                    <img src="bpd_cover_heatmap.jpg" alt="Ball Playing Defender Cover Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">No-Nonsense Centre-Back</h2>
                <p className="description">A traditional, physical defender who focuses purely on defensive duties and clears danger immediately without attempting to play out from the back.</p>
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
                        <li>More Direct Passes</li>
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Focuses exclusively on defensive duties, clearing the ball immediately when under pressure. Strong in the air and in tackles.</p>
                    <img src="nc_defend_heatmap.jpg" alt="No-Nonsense Centre-Back Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Stopper</span>
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
                        <li>More Direct Passes</li>
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Aggressively closes down opponents and wins the ball early, clearing danger immediately rather than playing out.</p>
                    <img src="nc_stopper_heatmap.jpg" alt="No-Nonsense Centre-Back Stopper Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Cover</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={1} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>More Direct Passes</li>
                        <li>Take Fewer Risks</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Provides cover behind more aggressive defenders, clearing danger decisively when needed. Strong positional sense.</p>
                    <img src="nc_cover_heatmap.jpg" alt="No-Nonsense Centre-Back Cover Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Wide Centre-Back</h2>
                <p className="description">A central defender who operates in wider areas, often in back three systems. Combines defensive solidity with the ability to support attacks in wide areas.</p>
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
                        <li>Cross From Deep</li>
                        <li>Hold Position</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Focuses on defensive duties in wide areas, marking opposition forwards and covering channels. Rarely ventures forward.</p>
                    <img src="wcb_defend_heatmap.jpg" alt="Wide Centre-Back Defend Heatmap" className="heatmap" />
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
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Balances defensive duties with supporting attacks in wide areas, occasionally overlapping or providing passing options.</p>
                    <img src="wcb_support_heatmap.jpg" alt="Wide Centre-Back Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
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
                        <li>Cross More Often</li>
                        <li>Cross From Byline</li>
                        <li>Dribble More</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Frequently joins attacks in wide areas, providing width and crossing opportunities. Takes more risks defensively.</p>
                    <img src="wcb_attack_heatmap.jpg" alt="Wide Centre-Back Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default Defender;