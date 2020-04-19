[← Back](../README.md)

# CSS Custom Media

> CSS Custom Media is a native feature of the CSS, in the process of becoming a web standard. [Read the official specification draft][custom-mq-specification-url].

[![CSS Standard Status][cssdb-img]][cssdb-url]

Import `custom-media.css` and use the CSS Custom Media Queries.

| Custom Media                |                  Value |
| :-------------------------- | ---------------------: |
| `@media (--from-xsmall)`    |      `min-width: 30em` |
| `@media (--from-small)`     |      `min-width: 48em` |
| `@media (--from-medium)`    |      `min-width: 60em` |
| `@media (--from-large)`     |      `min-width: 80em` |
| `@media (--from-xlarge)`    |     `min-width: 100em` |
| `@media (--to-xsmall)`      |      `max-width: 30em` |
| `@media (--to-small)`       |      `max-width: 48em` |
| `@media (--to-medium)`      |      `max-width: 60em` |
| `@media (--to-large)`       |      `max-width: 80em` |
| `@media (--to-xlarge)`      |     `max-width: 100em` |
| `@media (--landscape)`      |  landscape orientation |
| `@media (--portrait)`       |   portrait orientation |
| `@media (--reduced-motion)` | prefers reduced motion |
| `@media (--light-scheme)`   |   prefers light colors |
| `@media (--dark-scheme)`    |    prefers dark colors |
| `@media (--fine-pointer)`   | hover and fine pointer |
| `@media (--high-density)`   |     device-pixel-ratio |

<!---
  B A D G E S
-->

[cssdb-img]: https://cssdb.org/badge/custom-media-queries.svg

<!---
  L I N K S
-->

[cssdb-url]: https://cssdb.org/#custom-media-queries
[custom-mq-specification-url]: http://drafts.csswg.org/mediaqueries-5/#custom-mq
