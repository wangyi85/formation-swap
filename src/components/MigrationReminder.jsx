import { useContext } from "react";
import { ThemeContext } from "CONTEXT/theme-context";
import { REMINDER_STYLE } from "containers/constants";

const MigrationReminder = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="reminder mt-4">
      <div
        className="reminder__info--2"
        style={
          theme === "theme-light"
            ? REMINDER_STYLE.LIGHT.BOX_2.BORDER
            : REMINDER_STYLE.DARK.BOX_2.BORDER
        }
      >
        <p className="txt-center font-size-14 line-height-4">
          <span
            style={
              theme === "theme-light"
                ? REMINDER_STYLE.LIGHT.BOX_2.TEXT
                : REMINDER_STYLE.DARK.BOX_2.TEXT
            }
          >
            Please contact{" "}
          </span>
          <a
            href="mailto:support@formation.fi"
            className="reminder__info--2__link"
            style={
              theme === "theme-light"
                ? REMINDER_STYLE.LIGHT.BOX_2.LINK
                : REMINDER_STYLE.DARK.BOX_2.LINK
            }
          >
            support@formation.fi
          </a>{" "}
          <span
            style={
              theme === "theme-light"
                ? REMINDER_STYLE.LIGHT.BOX_2.TEXT
                : REMINDER_STYLE.DARK.BOX_2.TEXT
            }
          >
            with any questions related to farms.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MigrationReminder;
