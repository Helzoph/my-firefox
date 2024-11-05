/* Enable userChrome */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

user_pref("browser.bookmarks.openInTabClosesMenu", false);

user_pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", true);

/* Disable full screen animation */
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.transition.timeout", 0);