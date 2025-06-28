# T&C Notifier

A chromium plugin that automatically prompts ChatGPT when agreeing to Terms and Conditions to summarize watchouts and irregularities you might agree to.

This repository contains an **experimental** version of the extension. It listens for clicks on buttons labelled `Agree` or `Accept`, grabs the page text and sends it to OpenAI's API for summarisation. The summary is displayed in an alert.

## Usage

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder.
4. Open the extension options and provide your OpenAI API key.
5. Visit any site with an "Agree" button to trigger a summary.

Results may vary greatly.
No guarantees whatsoever are given from the usage of this plugin.
**USE AT YOUR OWN RISK!**

