/* eslint-disable react-hooks/exhaustive-deps */
import { __ } from "@wordpress/i18n";

import { useEffect, useState } from "@wordpress/element";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  Button,
  PanelBody,
  PanelRow,
  FormToggle,
  Tooltip,
} from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  RichText,
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
} from "@wordpress/block-editor";

import defaultImage from "./placeholder-image.jpeg";
import { mdprimeColors } from "../common";
import "./editor.scss";

const siteURL = window.location.origin;

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    leadersRoles,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle
  } = attributes;

  const [currentRole, setCurrentRole] = useState(0);

  const leadersAttr = {
    leadershipName: "",
    leadershipTitle: "",
    leadershipHeadshot: "",
    leadershipBio: "",
    popup: false,
  };

  const leadersRolesAttr = {
    leadershipRole: "",
    leaders: [leadersAttr],
  };

  useEffect(() => {
    if (0 === leadersRoles.length) {
      initList();
    }
  }, []);

  const initList = () => {
    setAttributes({
      leadersRoles: [...leadersRoles, leadersRolesAttr],
    });
  };

  const addNewItem = () => {
    setAttributes({
      leadersRoles: [...leadersRoles, leadersRolesAttr],
      uniqueId: Math.random(),
    });
  };

  const addNewLeader = (index) => {
    const updatedleaders = [...leadersRoles];
    updatedleaders[index].leaders = [
      ...updatedleaders[index].leaders,
      leadersAttr,
    ];
    setAttributes({
      leadersRoles: updatedleaders,
    });
  };

  const moveItem = (roleIndex, oldIndex, newIndex) => {
    const arrayRoleCopy = [...leadersRoles];
    const arrayCopy = arrayRoleCopy[roleIndex].leaders;
    const leadersCopy = arrayCopy;
    const item = leadersCopy[oldIndex];
    const updatedArray = arrayCopy.filter((itemObj, itemIndex) => {
      return itemIndex !== oldIndex;
    });
    updatedArray.splice(newIndex, 0, item);
    arrayRoleCopy[roleIndex].leaders = updatedArray;
    setAttributes({
      leadersRoles: arrayRoleCopy,
    });
  };

  const leadersPopup = (index) => {
    const currentLeader = leadersRoles[currentRole].leaders[index];
    return (
      <div
        className={`leader_role_popup__wrap ${
          currentLeader.popup ? "show-popup" : ""
        }`}
        key={index}
      >
        <div className="leader_role_popup__inner">
          <div className="leader_role_popup__inner-header">
            <i
              className="dashicons dashicons-no-alt close-popup"
              onClick={() => {
                const updatedleaders = [...leadersRoles];
                updatedleaders[currentRole].leaders[index].popup = false;
                setAttributes({
                  leadersRoles: updatedleaders,
                });
              }}
              role="button"
              tabIndex={0}
              aria-label="Close popup"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  // Trigger the click event when Enter or Space key is pressed
                  event.target.click();
                }
              }}
            ></i>
          </div>
          <div className="leader_role_popup__inner-content">
            <div className="leader_role_popup__inner-content-heading">
              <div className="leader_role_popup__inner-content-img-wrap">
                <MediaUpload
                  onSelect={(leadershipHeadshot) => {
                    const copyData = [...leadersRoles];
                    copyData[currentRole].leaders[index].leadershipHeadshot =
                      leadershipHeadshot.sizes.full.url;
                    setAttributes({
                      leadersRoles: copyData,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={currentLeader.leadershipHeadshot}
                  render={({ open }) =>
                    !currentLeader.leadershipHeadshot ? (
                      <Button
                        className={
                          currentLeader.leadershipHeadshot
                            ? "image-button "
                            : " button-large"
                        }
                        onClick={open}
                      >
                        <p className="components-button button button-large">
                          <i className="fa fa-upload"></i>
                          {__("Update Image", "md-prime")}
                        </p>
                      </Button>
                    ) : (
                      <Button
                        className={
                          currentLeader.leadershipHeadshot
                            ? "image-button "
                            : " button-large"
                        }
                        onClick={open}
                      >
                        <p className="components-button button button-large">
                          <i className="fa fa-pencil"></i>
                          {__("Update Image", "md-prime")}
                        </p>
                      </Button>
                    )
                  }
                />
                {currentLeader.leadershipHeadshot ? (
                  <img
                    src={currentLeader.leadershipHeadshot}
                    alt="Leadership"
                    className="author-img"
                  />
                ) : (
                  <img
                    src={siteURL + defaultImage}
                    alt="placeholder img"
                    className="author-img"
                  />
                )}
              </div>
              <div className="leader_role_popup__inner-content-heading-text">
                <RichText
                  tagName="h3"
                  placeholder={__("Name")}
                  value={currentLeader.leadershipName}
                  keepPlaceholderOnFocus="true"
                  className="leadershipName"
                  style={
                    authornamecolor
                      ? {
                          color: authornamecolor,
                        }
                      : {}
                  }
                  onChange={(leadershipName) => {
                    const newObject = Object.assign({}, currentLeader, {
                      leadershipName,
                    });
                    const blockDetails = [...leadersRoles[currentRole].leaders];
                    blockDetails[index] = newObject;

                    const updatedRoles = [...leadersRoles];
                    updatedRoles[currentRole].leaders = blockDetails;
                    setAttributes({
                      leadersRoles: updatedRoles,
                    });
                  }}
                />
                <RichText
                  tagName="p"
                  placeholder={__("Position")}
                  value={currentLeader.leadershipTitle}
                  className="leadershipTitle"
                  keepPlaceholderOnFocus="true"
                  style={
                    authortitlecolor
                      ? {
                          color: authortitlecolor,
                        }
                      : {}
                  }
                  onChange={(leadershipTitle) => {
                    const newObject = Object.assign({}, currentLeader, {
                      leadershipTitle,
                    });
                    const blockDetails = [...leadersRoles[currentRole].leaders];
                    blockDetails[index] = newObject;

                    const updatedRoles = [...leadersRoles];
                    updatedRoles[currentRole].leaders = blockDetails;
                    setAttributes({
                      leadersRoles: updatedRoles,
                    });
                  }}
                />
              </div>
            </div>
            <div className="leader_role_popup__inner-content-text">
              <RichText
                tagName="p"
                placeholder={__("Bio")}
                value={currentLeader.leadershipBio}
                className="leadershipBio"
                keepPlaceholderOnFocus="true"
                onChange={(leadershipBio) => {
                  const newObject = Object.assign({}, currentLeader, {
                    leadershipBio,
                  });
                  const blockDetails = [...leadersRoles[currentRole].leaders];
                  blockDetails[index] = newObject;

                  const updatedRoles = [...leadersRoles];
                  updatedRoles[currentRole].leaders = blockDetails;
                  setAttributes({
                    leadersRoles: updatedRoles,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const itemList = leadersRoles[currentRole].leaders.map(
    (leader, leaderIndex) => {
      const index = currentRole;
      const product = leadersRoles[index];
      return (
        <div
          className="leadership__author__box-item show-items-hover-wrap"
          key={leaderIndex}
        >
          <div className="item-action-wrap show-items-hover small-icons">
            <div className="move-item">
              {0 < leaderIndex && (
                <Tooltip text={__("Move Left", "md-prime")}>
                  <span
                    className="dashicons dashicons-arrow-left-alt move-up"
                    onClick={() =>
                      moveItem(index, leaderIndex, leaderIndex - 1)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        moveItem(index, leaderIndex, leaderIndex - 1);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Move item left"
                  ></span>
                </Tooltip>
              )}
              {leaderIndex + 1 < product.leaders.length && (
                <Tooltip text={__("Move Right", "md-prime")}>
                  <span
                    className="dashicons dashicons-arrow-right-alt move-down"
                    onClick={() =>
                      moveItem(index, leaderIndex, leaderIndex + 1)
                    }
                    role="button"
                    tabIndex={0}
                    aria-label="Move item down"
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        // Simulate the click event on Enter or Space key
                        event.target.click();
                      }
                    }}
                  ></span>
                </Tooltip>
              )}
            </div>
            {1 < product.leaders.length && (
              <Tooltip text={__("Remove Item", "md-prime")}>
                <i
                  className="remove-item dashicons dashicons-no-alt"
                  onClick={() => {
                    const toDelete =
                      // eslint-disable-next-line no-alert
                      confirm(
                        __(
                          "Are you sure you want to remove this item?",
                          "md-prime"
                        )
                      );
                    if (toDelete === true) {
                      const updatedleaders = product.leaders.filter(
                        (item, itemIndex) => itemIndex !== leaderIndex
                      );

                      const updatedRoles = [...leadersRoles];
                      updatedRoles[index].leaders = updatedleaders;

                      setAttributes({
                        leadersRoles: updatedRoles,
                      });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Remove item"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Simulate the click event on Enter or Space key
                      event.target.click();
                    }
                  }}
                ></i>
              </Tooltip>
            )}
          </div>
          <div className="leadership__author__box-item-inner">
            <div className="leadership__author__box-item-inner-img">
              <MediaUpload
                onSelect={(leadershipHeadshot) => {
                  const copyData = [...leadersRoles];
                  copyData[index].leaders[leaderIndex].leadershipHeadshot =
                    leadershipHeadshot.sizes.full.url;
                  setAttributes({
                    leadersRoles: copyData,
                  });
                }}
                allowedTypes={["image"]}
                value={leader.leadershipHeadshot}
                render={({ open }) =>
                  !leader.leadershipHeadshot ? (
                    <Button
                      className={
                        leader.leadershipHeadshot
                          ? "image-button "
                          : " button-large"
                      }
                      onClick={open}
                    >
                      <p className="components-button button button-large">
                        <i className="fa fa-upload"></i>
                        {__("Update Image", "md-prime")}
                      </p>
                    </Button>
                  ) : (
                    <Button
                      className={
                        leader.leadershipHeadshot
                          ? "image-button "
                          : " button-large"
                      }
                      onClick={open}
                    >
                      <p className="components-button button button-large">
                        <i className="fa fa-pencil"></i>
                        {__("Update Image", "md-prime")}
                      </p>
                    </Button>
                  )
                }
              />
              {leader.leadershipHeadshot ? (
                <img
                  src={leader.leadershipHeadshot}
                  alt="Leadership"
                  className="author-img"
                />
              ) : (
                <img
                  src={siteURL + defaultImage}
                  alt="placeholder img"
                  className="author-img"
                />
              )}
            </div>
            <div className="leadership__author__box-item-inner-content">
              {displayAuthorname && (
                <RichText
                  tagName="h3"
                  placeholder={__("Name")}
                  value={leader.leadershipName}
                  keepPlaceholderOnFocus="true"
                  className="leadershipName"
                  style={
                    authornamecolor
                      ? {
                          color: authornamecolor,
                        }
                      : {}
                  }
                  onChange={(leadershipName) => {
                    const newObject = Object.assign({}, leader, {
                      leadershipName,
                    });
                    const blockDetails = [...product.leaders];
                    blockDetails[leaderIndex] = newObject;

                    const updatedRoles = [...leadersRoles];
                    updatedRoles[index].leaders = blockDetails;
                  }}
                />
              )}
              {displayAuthortitle && (
                <RichText
                  tagName="p"
                  placeholder={__("Position")}
                  value={leader.leadershipTitle}
                  className="leadershipTitle"
                  keepPlaceholderOnFocus="true"
                  style={
                    authortitlecolor
                      ? {
                          color: authortitlecolor,
                        }
                      : {}
                  }
                  onChange={(leadershipTitle) => {
                    const newObject = Object.assign({}, leader, {
                      leadershipTitle,
                    });
                    const blockDetails = [...product.leaders];
                    blockDetails[leaderIndex] = newObject;

                    const updatedRoles = [...leadersRoles];
                    updatedRoles[index].leaders = blockDetails;
                  }}
                />
              )}
              <strong
                className="about-popup"
                onClick={() => {
                  const updatedleaders = [...leadersRoles];
                  updatedleaders[index].leaders[leaderIndex].popup = true;
                  setAttributes({
                    leadersRoles: updatedleaders,
                  });
                }}
                role="button"
                tabIndex={0}
                aria-label="Open popup"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    // Trigger the click event when Enter or Space key is pressed
                    event.target.click();
                  }
                }}
              >
                Edit Bio
                <i className="fa fa-pencil-square-o"></i>
              </strong>
            </div>
          </div>
        </div>
      );
    }
  );

  const rolesList = leadersRoles.map((role, index) => {
    return (
      <div
        className={`leadership__roles__box-item show-items-hover-wrap ${
          index === currentRole ? "active" : ""
        }`}
        key={index}
      >
        <div className="item-action-wrap show-items-hover small-icons">
          <div className="move-item">
            {0 < index && (
              <Tooltip text={__("Move Left", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-left-alt move-up"
                  onClick={() => {
                    const updatedRoles = [...leadersRoles];
                    const item = updatedRoles[index];
                    updatedRoles.splice(index, 1);
                    updatedRoles.splice(index - 1, 0, item);
                    setAttributes({
                      leadersRoles: updatedRoles,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item left"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Trigger the click event when Enter or Space key is pressed
                      event.target.click();
                    }
                  }}
                ></span>
              </Tooltip>
            )}
            {index + 1 < leadersRoles.length && (
              <Tooltip text={__("Move Right", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-right-alt move-down"
                  onClick={() => {
                    const updatedRoles = [...leadersRoles];
                    const item = updatedRoles[index];
                    updatedRoles.splice(index, 1);
                    updatedRoles.splice(index + 1, 0, item);
                    setAttributes({
                      leadersRoles: updatedRoles,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item right"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Trigger the click event when Enter or Space key is pressed
                      event.target.click();
                    }
                  }}
                ></span>
              </Tooltip>
            )}
          </div>
          {1 < leadersRoles.length && (
            <Tooltip text={__("Remove Item", "md-prime")}>
              <i
                className="remove-item dashicons dashicons-no-alt"
                onClick={() => {
                  const toDelete =
                    // eslint-disable-next-line no-alert
                    confirm(
                      __(
                        "Are you sure you want to remove this item?",
                        "md-prime"
                      )
                    );
                  if (toDelete === true) {
                    const updatedRoles = leadersRoles.filter(
                      (item, itemIndex) => itemIndex !== index
                    );
                    setAttributes({
                      leadersRoles: updatedRoles,
                    });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Remove item"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    // Simulate the click event on Enter or Space key
                    event.target.click();
                  }
                }}
              ></i>
            </Tooltip>
          )}
        </div>
        <div className="leadership__roles__box-item-inner">
          <RichText
            tagName="h3"
            placeholder={__("Role")}
            value={role.leadershipRole}
            keepPlaceholderOnFocus="true"
            className="leadershipRole"
            onClick={() => {
              setCurrentRole(index);
            }}
            onChange={(leadershipRole) => {
              const newObject = Object.assign({}, role, {
                leadershipRole,
              });
              const blockDetails = [...leadersRoles];
              blockDetails[index] = newObject;
              setAttributes({
                leadersRoles: blockDetails,
              });
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings")}
          colorSettings={[
            {
              value: headingcolor,
              onChange: (newColor) => {
                setAttributes({ headingcolor: newColor });
              },
              label: __("Heading Color"),
              mdprimeColors,
            },
            {
              value: authornamecolor,
              onChange: (newColor) => {
                setAttributes({
                  authornamecolor: newColor,
                });
              },
              label: __("Team member name color"),
              mdprimeColors,
            },
            {
              value: authortitlecolor,
              onChange: (newColor) => {
                setAttributes({
                  authortitlecolor: newColor,
                });
              },
              label: __("Team member Position color"),
              mdprimeColors,
            },
            {
              value: bgcolor,
              onChange: (newColor) => {
                setAttributes({ bgcolor: newColor });
              },
              label: __("Heading background color"),
              mdprimeColors,
            },
          ]}
        />

        <PanelBody title="Visibility Settings">
          <PanelRow>
            <label htmlFor="display settings">
              {__("Name Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthorname}
              onChange={() =>
                setAttributes({
                  displayAuthorname: !displayAuthorname,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Position Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthortitle}
              onChange={() =>
                setAttributes({
                  displayAuthortitle: !displayAuthortitle,
                })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className="leadership">
          <div
            className="leadership__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText
              tagName="h2"
              value={heading}
              className="leadership__header-heading"
              onChange={(value) => setAttributes({ heading: value })}
              placeholder="Leadership"
              style={
                headingcolor
                  ? {
                      color: headingcolor,
                    }
                  : {}
              }
            />
          </div>
          <div className="container">
            <div className="leadership__roles">{rolesList}</div>
            <div
              className="add-item-wrap"
              onClick={() => {
                addNewItem();
              }}
              role="button"
              tabIndex={0}
              aria-label="Add new role"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  addNewItem();
                }
              }}
            >
              <Tooltip text={__("Add New Role", "md-prime")}>
                <i
                  onClick={() => {
                    setAttributes({
                      leadersRoles: [
                        ...leadersRoles,
                        {
                          leadershipRole: "",
                        },
                      ],
                    });
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setAttributes({
                        leadersRoles: [
                          ...leadersRoles,
                          {
                            leadershipRole: "",
                          },
                        ],
                      });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Add new role"
                  className="add-new-item dashicons dashicons-plus"
                ></i>
              </Tooltip>
            </div>
          </div>
          <div className="container">
            <div className="box-main leadership__author__box">{itemList}</div>
            <div className="leader_role_popup">
              {leadersRoles[currentRole].leaders.map((leader, index) => {
                return leadersPopup(index);
              })}
            </div>
            <div
              className="add-item-wrap"
              onClick={() => {
                addNewLeader(currentRole);
              }}
              role="button"
              tabIndex={0}
              aria-label="Add new item"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  addNewLeader(currentRole);
                }
              }}
            >
              <Tooltip text={__("Add New Item", "md-prime")}>
                <i
                  role="button"
                  tabIndex={0}
                  aria-label="Add new product"
                  className="add-new-item dashicons dashicons-plus"
                ></i>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
