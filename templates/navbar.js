import {LitElement, css, html} from 'lit';
import {customElement, customElement, property} from 'lit/decorators.js';

@customElement('navbar')
export class Navbar extends LitElement {
    static styles = css `
    
    `;

    render() {
        return html `
            
            <nav>
            <ul class="nav_link_list">
            <li class="nav_link">
            <a href="/" class="
            nav_link_a
            link__hover-effect
            ">Home</a>
            </li>
            <li class="nav_link">
            <a href="about" class="
            nav_link_a
            link__hover-effect
            ">About</a>
            </li>
            <li class="nav_link">
            <a href="story" class="
            nav_link_a
            link__hover-effect
            ">Story</a>
            </li>
            <li class="nav_link">
            <a href="timers" class="
            nav_link_a
            link__hover-effect
            ">Timer</a>
            </li>
            <li class="nav_link">
            <a href="login" class="
            nav_link_a
            link__hover-effect
            "> Login/Signup</a>
            </li>
            </nav>
        `;
    }
}
