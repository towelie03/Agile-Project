import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('navbar')
export class Navbar extends LitElement {
    static styles = css `
        :host {
            color: blue;
        } 
    `;

    render() {
        return html `
            
            <nav>
            <ul class="nav_link_list">
            <li class="nav_link">
            <a href="/" class="
            nav_link_a
            link__hover-effect
            ">home</a>
            </li>
            <li class="nav_link">
            <a href="about" class="
            nav_link_a
            link__hover-effect
            ">about</a>
            </li>
            <li class="nav_link">
            <a href="story" class="
            nav_link_a
            link__hover-effect
            ">story</a>
            </li>
            <li class="nav_link">
            <a href="timers" class="
            nav_link_a
            link__hover-effect
            ">timer</a>
            </li>
            <li class="nav_link">
            <a href="login" class="
            nav_link_a
            link__hover-effect
            "> login/signup</a>
            </li>
            </nav>
        `;
    }
}
