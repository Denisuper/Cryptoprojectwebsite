from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Go to the home page
    page.goto("http://localhost:5176")
    page.wait_for_timeout(2000)

    # Capture Hero and Terminal
    page.screenshot(path="/home/jules/verification/screenshots/home_hero.png")
    page.wait_for_timeout(500)

    # Scroll to Profit Calculator
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/home_scrolled.png")
    page.wait_for_timeout(500)

    # Go to Markets page
    page.goto("http://localhost:5176/pairs")
    page.wait_for_timeout(2000)
    page.screenshot(path="/home/jules/verification/screenshots/markets_page.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
