import { Icon } from "@iconify/react";
import css from "./Features.module.css";

export default function Features({ camper }) {
  return (
    <div className={css.container}>
      <ul className={css.details}>
        <li>
          <svg>
            <use href="../../assets/icons/users.svg"></use>
          </svg>
          <span>{camper.adults} adults</span>
        </li>
        <li>
          <Icon icon="tabler:automatic-gearbox" />
          <span> {camper.transmission}</span>
        </li>
        <li>
          {camper.details.airConditioner > 0 && (
            <>
              <Icon icon="fluent:weather-squalls-20-regular" />
              <span> AC</span>
            </>
          )}
        </li>
        <li>
          <Icon icon="mdi:petrol-pump-outline" />
          <span> {camper.engine}</span>
        </li>
        <li>
          {camper.details.kitchen > 0 && (
            <>
              <Icon icon="tabler:tools-kitchen-2" />
              <span>Kitchen</span>
            </>
          )}
        </li>
        <li>
          <Icon icon="ion:bed-outline" />
          <span>{camper.details.beds} beds</span>
        </li>
        <li>
          {camper.details.airConditioner > 0 && (
            <>
              <Icon icon="streamline:hotel-air-conditioner" />
              <span>{camper.details.airConditioner} air conditioner</span>
            </>
          )}
        </li>
        <li>
          {camper.details.cd > 0 && (
            <>
              <Icon icon="icon-park-outline:cd" />
              <span> CD</span>
            </>
          )}
        </li>
        <li>
          {camper.details.radio > 0 && (
            <>
              <Icon icon="solar:radio-linear" />
              <span> Radio</span>
            </>
          )}
        </li>
        <li>
          {camper.details.hob > 0 && (
            <>
              <svg className={css.icon}>
                <use
                  href="../../assets/icons/hob.svg"
                  className={css.icon}
                ></use>
              </svg>
              <span> {camper.details.hob} hob</span>
            </>
          )}
        </li>
        <li>
          {camper.details.toilet > 0 && (
            <>
              <Icon icon="mingcute:toilet-paper-line" />
              <span> Toilet</span>
            </>
          )}
        </li>
        <li>
          {camper.details.shower > 0 && (
            <>
              <Icon icon="lucide:shower-head" />
              <span> Shower</span>
            </>
          )}
        </li>
        <li>
          {camper.details.freezer > 0 && (
            <>
              <Icon icon="arcticons:freezer" className={css.icon} />
              <span> Freezer</span>
            </>
          )}
        </li>
        <li>
          {camper.details.gas !== "" && (
            <>
              <Icon icon="mdi:fire" />
              <span> Gas</span>
            </>
          )}
        </li>
        <li>
          {camper.details.water !== "" && (
            <>
              <Icon icon="ion:water-outline" />
              <span> Water</span>
            </>
          )}
        </li>
        <li>
          {camper.details.microwave > 0 && (
            <>
              <Icon icon="streamline:microwave" />
              <span> Microwave</span>
            </>
          )}
        </li>
        <li>
          {camper.details.bathroom > 0 && (
            <>
              <Icon icon="cil:bathroom" />
              <span>Bathroom</span>
            </>
          )}
        </li>
      </ul>
      <div>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <hr />
        <ul className={css.detailsList}>
          <li>
            <p>Form</p>
            <span>
              {camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}
            </span>
          </li>
          <li>
            <p>Length</p>
            <span>{camper.length}</span>
          </li>
          <li>
            <p>Width</p>
            <span>{camper.width}</span>
          </li>
          <li>
            <p>Height</p>
            <span>{camper.height}</span>
          </li>
          <li>
            <p>Tank</p>
            <span>{camper.tank}</span>
          </li>
          <li>
            <p>Consumption</p>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
