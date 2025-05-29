import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function Winger() {

    return (
        <main>
            <h1>Winger</h1>
            <div className="description">
                <p>Wingers provide width and creativity from wide positions, stretching defenses and creating chances through crosses, dribbling, or cutting inside. Their roles range from traditional touchline-hugging wingers to inverted forwards who operate as secondary strikers.</p>
            </div>
            <article>
                <h2 className="role-title">Winger</h2>
                <p className="description">A traditional wide attacker who stays near the touchline to deliver crosses and beat defenders with pace.</p>
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
                        <li>Cross More Often</li>
                        <li>Dribble More</li>
                        <li>Stay Wider</li>
                    </ul>
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
                    <ul className='mentality-instructions'>
                        <li>Cross More Often</li>
                        <li>Cross From Byline</li>
                        <li>Dribble More</li>
                        <li>Get Further Forward</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Highly aggressive, constantly taking on defenders and delivering dangerous crosses. Defensive duties are minimal.</p>
                    <img src="winger_attack_heatmap.jpg" alt="Winger Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Advanced Playmaker</h2>
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
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Cross Less Often</li>
                        <li>Cut Inside With Ball</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Drops between lines to receive the ball and create chances through defense-splitting passes while offering some defensive work.</p>
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
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Cross Less Often</li>
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Operates as the team's chief creator from wide areas, taking risks with passes and movement to break down defenses.</p>
                    <img src="wp_attack_heatmap.jpg" alt="Wide Playmaker Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Inside Forward</h2>
                <p className="description">A wide attacker who cuts inside onto their stronger foot to shoot or create chances, operating like a secondary striker.</p>
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
                        <li>Cross Less Often</li>
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Cuts inside to link play and create chances while maintaining some defensive responsibility.</p>
                    <img src="if_support_heatmap.jpg" alt="Inside Forward Support Heatmap" className="heatmap" />
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
                        <li>Cross Less Often</li>
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Aggressively cuts inside to shoot or create chances, operating as a secondary striker with minimal defensive work.</p>
                    <img src="if_attack_heatmap.jpg" alt="Inside Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Trequartista</h2>
                <p className="description">A creative free spirit given complete freedom to roam across the frontline and find space between defenders.</p>
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
                        <li>Ease Off Tackles</li>
                    </ul>
                    <p className="mentality-description">Ignores defensive responsibilities completely, focusing solely on finding space and creating chances through individual brilliance.</p>
                    <img src="treq_attack_heatmap.jpg" alt="Trequartista Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Wide Target Forward</h2>
                <p className="description">A physical presence out wide who uses strength to hold up the ball and bring teammates into play.</p>
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
                        <li>Dribble Less</li>
                        <li>Hold Up Ball</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Uses physicality to retain possession and create chances for teammates while contributing defensively.</p>
                    <img src="wtf_support_heatmap.jpg" alt="Wide Target Forward Support Heatmap" className="heatmap" />
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
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Focuses on using physical attributes to create and score goals with minimal defensive contribution.</p>
                    <img src="wtf_attack_heatmap.jpg" alt="Wide Target Forward Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Raumdeuter</h2>
                <p className="description">A specialist who finds pockets of space in dangerous areas without directly engaging defenders.</p>
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
                        <li>Pass It Shorter</li>
                        <li>Cross Less Often</li>
                        <li>Get Further Forward</li>
                        <li>Roam From Position</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">Constantly moves into dangerous spaces between defenders to score goals, offering no defensive work.</p>
                    <img src="raum_attack_heatmap.jpg" alt="Raumdeuter Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Inverted Winger</h2>
                <p className="description">A wide attacker who cuts inside onto their stronger foot to create overloads in central areas.</p>
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
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                    </ul>
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
                    <ul className='mentality-instructions'>
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Aggressively cuts inside to shoot or create chances, operating as a secondary striker at times.</p>
                    <img src="iw_attack_heatmap.jpg" alt="Inverted Winger Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default Winger;