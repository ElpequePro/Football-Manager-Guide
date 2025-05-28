import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function Midfielder() {

    return (
        <main>
            <h1>Midfielder</h1>
            <div className="description">
                <p>Midfielders are the engine room of any team, connecting defense with attack. Their diverse roles range from destructive ball-winners to creative playmakers, with many hybrid roles in between that dictate a team's playing style.</p>
            </div>
            <article>
                <h2 className="role-title">Central Midfielder</h2>
                <p className="description">The standard midfield role that provides balance between defense and attack. Adaptable to various tactical approaches through different mentalities.</p>
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
                    <p className="mentality-description">Focuses on defensive positioning and simple distribution. Stays deeper to protect the backline while recycling possession efficiently.</p>
                    <img src="cm_defend_heatmap.jpg" alt="Central Midfielder Defend Heatmap" className="heatmap" />
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
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <p className="mentality-description">Balances defensive duties with attacking contributions. Makes supporting runs and participates in both phases of play.</p>
                    <img src="cm_support_heatmap.jpg" alt="Central Midfielder Support Heatmap" className="heatmap" />
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <p className="mentality-description">More adventurous in positioning, making forward runs to support attacks while still maintaining some defensive responsibility.</p>
                    <img src="cm_attack_heatmap.jpg" alt="Central Midfielder Attack Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Automatic</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <p className="mentality-description">Adjusts mentality based on team strategy - more defensive when protecting a lead, more attacking when chasing the game.</p>
                    <img src="cm_auto_heatmap.jpg" alt="Central Midfielder Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Deep Lying Playmaker</h2>
                <p className="description">A creative pivot who operates in deeper midfield positions, dictating play with intelligent passing while providing defensive cover.</p>
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
                    <p className="mentality-description">More adventurous in positioning, stepping into midfield to influence play while still providing defensive cover when needed.</p>
                    <img src="dlp_support_heatmap.jpg" alt="Deep Lying Playmaker Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Box To Box Midfielder</h2>
                <p className="description">A dynamic, all-action midfielder who contributes to both defensive and attacking phases with endless energy and stamina.</p>
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
                    <p className="mentality-description">Covers every blade of grass, supporting attacks and tracking back defensively. The ultimate all-round midfield role.</p>
                    <img src="btb_support_heatmap.jpg" alt="Box To Box Midfielder Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Advanced Playmaker</h2>
                <p className="description">The team's primary creative outlet in advanced midfield positions, specializing in unlocking defenses with incisive passing.</p>
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
                    <p className="mentality-description">Drops deeper to receive the ball and dictate play between the lines, creating chances with vision and technique.</p>
                    <img src="ap_support_heatmap.jpg" alt="Advanced Playmaker Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">More aggressive in positioning, operating closer to the opposition box to create goal-scoring opportunities.</p>
                    <img src="ap_attack_heatmap.jpg" alt="Advanced Playmaker Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Ball Winning Midfielder</h2>
                <p className="description">An aggressive midfielder who specializes in winning back possession through tackles and interceptions.</p>
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
                    <p className="mentality-description">Focuses purely on defensive duties, aggressively closing down opponents in midfield areas before making simple passes.</p>
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
                    <p className="mentality-description">Presses higher up the pitch to win possession while still maintaining defensive responsibilities. More involved in transitional play.</p>
                    <img src="bwm_support_heatmap.jpg" alt="Ball Winning Midfielder Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Roaming Playmaker</h2>
                <p className="description">A dynamic creative midfielder given license to move across the pitch to find space and influence play in all areas.</p>
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
                    <p className="mentality-description">Constantly moves to find space and receive the ball, linking play between defense and attack with intelligent movement and passing.</p>
                    <img src="rp_support_heatmap.jpg" alt="Roaming Playmaker Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Mezzala</h2>
                <p className="description">A wide central midfielder who operates in the half-spaces, combining creative play with goal threat through late runs.</p>
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
                    <p className="mentality-description">Drifts wide to create overloads while making supporting runs into the box. Provides creativity and goal threat.</p>
                    <img src="mez_support_heatmap.jpg" alt="Mezzala Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">More aggressive with forward runs, frequently arriving in scoring positions while drifting wide to create chances.</p>
                    <img src="mez_attack_heatmap.jpg" alt="Mezzala Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Carrilero</h2>
                <p className="description">A specialized central midfielder who covers the half-spaces defensively while providing lateral support in possession.</p>
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
                    <p className="mentality-description">Shuttles across midfield to provide defensive cover in wide areas while supporting attacks through intelligent positioning.</p>
                    <img src="car_support_heatmap.jpg" alt="Carrilero Support Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default Midfielder;