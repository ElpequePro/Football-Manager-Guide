import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function WingBack() {

    return (
        <main>
            <h1>Wing-Back</h1>
            <div className="description">
                <p>Wing-backs are more advanced than traditional full-backs, operating as key attacking outlets in systems with three center-backs. They require exceptional stamina to cover the entire flank, providing width in attack while maintaining defensive responsibilities.</p>
            </div>
            <article>
                <h2 className="role-title">Wing-Back</h2>
                <p className="description">The standard wing-back role that balances defensive duties with attacking contributions. More advanced than a full-back, often used in 3-5-2 or 5-3-2 formations.</p>
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
                        <li>Take Fewer Risks</li>
                        <li>Cross From Deep</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">While still more attacking than a full-back, focuses primarily on defensive duties and maintaining width in deeper positions. Provides an outlet but doesn't take many risks.</p>
                    <img src="wb_defend_heatmap.jpg" alt="Wing-Back Defend Heatmap" className="heatmap" />
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
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">The balanced wing-back approach, constantly moving up and down the flank to support both defensive and attacking phases. Provides crosses and maintains width.</p>
                    <img src="wb_support_heatmap.jpg" alt="Wing-Back Support Heatmap" className="heatmap" />
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
                        <li>Cross From Byline</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Highly attacking mentality, essentially operating as a winger. Constantly pushes forward to provide crosses and attacking options while still expected to track back.</p>
                    <img src="wb_attack_heatmap.jpg" alt="Wing-Back Attack Heatmap" className="heatmap" />
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Adjusts mentality based on team strategy - more defensive when protecting a lead, more attacking when chasing a game. The default balanced option.</p>
                    <img src="wb_auto_heatmap.jpg" alt="Wing-Back Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Complete Wing-Back</h2>
                <p className="description">The most demanding wing-back role, expected to be a constant attacking threat while maintaining defensive solidity. Requires world-class stamina and technical ability.</p>
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
                        <li>Get Further Forward</li>
                        <li>Roam From Position</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">A relentless presence on the flank, constantly involved in both defensive and attacking phases. More creative than a standard wing-back with license to take risks.</p>
                    <img src="cwb_support_heatmap.jpg" alt="Complete Wing-Back Support Heatmap" className="heatmap" />
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
                        <li>Cross From Byline</li>
                        <li>Get Further Forward</li>
                        <li>Roam From Position</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">An ultra-attacking wing-back who essentially operates as a winger. Expected to deliver dangerous crosses and create chances while still providing defensive cover.</p>
                    <img src="cwb_attack_heatmap.jpg" alt="Complete Wing-Back Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
                <h2 className="role-title">Inverted Wing-Back</h2>
                <p className="description">A tactically sophisticated wing-back who cuts inside into central areas rather than staying wide. Creates numerical superiority in midfield while maintaining width when needed.</p>
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
                        <li>Cross Less Often</li>
                        <li>Dribble Less</li>
                        <li>Cut Inside With Ball</li>
                        <li>Hold Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Tucks inside to provide defensive cover in midfield areas while maintaining shape. Less adventurous than other mentalities but still provides an option in buildup.</p>
                    <img src="iwb_defend_heatmap.jpg" alt="Inverted Wing-Back Defend Heatmap" className="heatmap" />
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross Less Often</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Moves inside to support midfield play, creating overloads in central areas while still providing defensive cover. A key component in possession-based systems.</p>
                    <img src="iwb_support_heatmap.jpg" alt="Inverted Wing-Back Support Heatmap" className="heatmap" />
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
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Aggressively moves inside to support attacks, often functioning as an additional central midfielder in possession. Takes risks to create numerical advantages.</p>
                    <img src="iwb_attack_heatmap.jpg" alt="Inverted Wing-Back Attack Heatmap" className="heatmap" />
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
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross Less Often</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Intelligently adjusts positioning based on team needs - defending deeper when required, supporting midfield play in balanced situations, or joining attacks when appropriate.</p>
                    <img src="iwb_auto_heatmap.jpg" alt="Inverted Wing-Back Automatic Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default WingBack;