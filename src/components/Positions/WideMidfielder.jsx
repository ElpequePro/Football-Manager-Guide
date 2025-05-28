import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function WideMidfielder() {

    return (
        <main>
            <h1>Wide Midfielder</h1>
            <div className="description">
                <p>Wide midfielders operate along the flanks, providing width and stretching opposition defenses. Their roles range from traditional wingers to more defensively-oriented wide players, offering diverse tactical options for different systems.</p>
            </div>
            <article>
                <h2 className="role-title">Wide Midfielder</h2>
                <p className="description">The standard wide role that balances defensive responsibilities with attacking contributions. More disciplined than pure wingers but still dangerous going forward.</p>
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
                    <p className="mentality-description">Focuses primarily on defensive duties, staying deep to protect the flank and mark opposition wide players. Rarely ventures forward.</p>
                    <img src="wm_defend_heatmap.jpg" alt="Wide Midfielder Defend Heatmap" className="heatmap" />
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
                    <p className="mentality-description">Balances defensive work with attacking contributions. Makes supporting runs and delivers crosses while tracking back.</p>
                    <img src="wm_support_heatmap.jpg" alt="Wide Midfielder Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">More aggressive in positioning, frequently pushing forward to support attacks while maintaining defensive awareness.</p>
                    <img src="wm_attack_heatmap.jpg" alt="Wide Midfielder Attack Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Automatic</span>
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
                    <p className="mentality-description">Adjusts mentality based on team strategy - more defensive when protecting a lead, more attacking when chasing the game.</p>
                    <img src="wm_auto_heatmap.jpg" alt="Wide Midfielder Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Winger</h2>
                <p className="description">A traditional wide attacker who looks to beat defenders with pace and skill before delivering crosses into the box.</p>
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
                    <p className="mentality-description">Stays wide to stretch defenses and deliver crosses while tracking back to help defensively when needed.</p>
                    <img src="winger_support_heatmap.jpg" alt="Winger Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">Highly aggressive, constantly taking on defenders and delivering dangerous crosses. Defensive duties are secondary.</p>
                    <img src="winger_attack_heatmap.jpg" alt="Winger Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Defensive Winger</h2>
                <p className="description">A hard-working wide player who combines aggressive pressing with attacking contributions.</p>
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
                    <p className="mentality-description">Focuses on pressing opponents high up the pitch and tracking back defensively while still providing width in attack.</p>
                    <img src="dw_defend_heatmap.jpg" alt="Defensive Winger Defend Heatmap" className="heatmap" />
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
                    <p className="mentality-description">Aggressively presses opponents while contributing more to attacks through crosses and supporting runs.</p>
                    <img src="dw_support_heatmap.jpg" alt="Defensive Winger Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Wide Playmaker</h2>
                <p className="description">A creative wide player who drifts inside to find space and dictate play from the flanks.</p>
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
                    <p className="mentality-description">Drops deep to receive the ball and create chances from wide areas while maintaining some defensive responsibility.</p>
                    <img src="wp_support_heatmap.jpg" alt="Wide Playmaker Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">More aggressive in positioning, operating as the team's primary creative outlet from wide areas.</p>
                    <img src="wp_attack_heatmap.jpg" alt="Wide Playmaker Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Inverted Winger</h2>
                <p className="description">A wide attacker who cuts inside onto their stronger foot, creating goal-scoring opportunities and overloading central areas.</p>
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
                    <p className="mentality-description">Cuts inside to link play and create chances while maintaining some defensive responsibility.</p>
                    <img src="iw_support_heatmap.jpg" alt="Inverted Winger Support Heatmap" className="heatmap" />
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
                    <p className="mentality-description">Aggressively cuts inside to shoot or create chances, operating as a secondary striker at times.</p>
                    <img src="iw_attack_heatmap.jpg" alt="Inverted Winger Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default WideMidfielder;