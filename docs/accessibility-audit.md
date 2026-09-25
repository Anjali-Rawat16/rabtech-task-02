
# Accessibility Audit Report

## 1. Website Details

- **Website:** SWTCH Energy
- **URL:** https://swtchenergy.com/
- **Tool:** Google PageSpeed Insights (Lighthouse)
- **Device mode:** Mobile
- **Accessibility Score:** 82/100
- **Audit Type:** Automated accessibility audit and manual keyboard testing

## 2. Objective

The purpose of this audit is to identify accessibility issues that may affect users, particularly people who rely on screen readers or keyboard navigation.

## 3. Lighthouse Findings

### Issue 1: Buttons Do Not Have Accessible Names

- **Evidence:** Lighthouse identified the header menu button and previous/next slider buttons.
- **Impact:** Screen readers may announce these controls as buttons without explaining their purpose.
- **Priority:** High
- **Recommended Fix:** Add descriptive accessible names, such as `aria-label="Open menu"` and `aria-label="Next slide"`, to the relevant buttons.

### Issue 2: Links Do Not Have a Discernible Name

- **Evidence:** The hero section contains an anchor element with `href="#content"` and class `c-hero_anchor`.
- **Impact:** Screen reader users may not understand the purpose of the link.
- **Priority:** High
- **Recommended Fix:** Give the link meaningful accessible text or an appropriate accessible name.

### Issue 3: Redundant Image Alternative Text

- **Evidence:** Lighthouse identified an App Store image with `alt="App Store"`. This finding is marked Unscored.
- **Impact:** If the adjacent link text already says "App Store", screen readers may announce the same information twice.
- **Priority:** Low
- **Recommended Fix:** Review the surrounding link and text. Use concise alternative text or an empty alt attribute for a decorative/redundant image, as appropriate.

### Issue 4: Prohibited ARIA Attributes

- **Evidence:** Lighthouse identified `aria-label` attributes on paragraph or span elements.
- **Impact:** ARIA attributes on unsupported elements may not provide the intended accessible name or information to assistive technologies.
- **Priority:** Medium
- **Recommended Fix:** Use semantic HTML elements and apply ARIA attributes only where supported and appropriate.

### Issue 5: Heading Elements Are Not in Sequential Order

- **Evidence:** Lighthouse identified the heading "INTELLIGENT EV CHARGING YOU CAN RELY ON" as an h3 element.
- **Impact:** An incorrect heading hierarchy can make page structure harder to understand and navigate for screen reader users.
- **Priority:** Medium
- **Recommended Fix:** Review the page heading hierarchy and use heading levels in a logical order.

## 4. Manual Keyboard Testing

The following checks were performed manually:

| Test | Observation |
|---|---|
| Tab | Focus moved forward through interactive elements. |
| Shift + Tab | Focus moved backward. |
| Enter | Links and buttons were activated. |
| Space | The page scrolled when Space was pressed. |

**Note:** Space scrolling is normal when focus is on a link or a non-button element. Space should activate a focused button. A button-specific test is needed before confirming a failure.

## 5. Summary

The website received an accessibility score of 82/100 in the Lighthouse mobile audit.

The audit identified issues involving accessible names, link labels, alternative text, ARIA usage, and heading hierarchy.

Recommended remediation should begin with controls and links that lack accessible names, followed by semantic HTML and heading structure improvements.

This report documents automated findings and limited manual keyboard checks. It is not a complete WCAG conformance assessment.