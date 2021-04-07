import React, { useEffect, useRef, useState } from "react";
import Container from "ui-box";
import { createPopper } from "@popperjs/core";

import Badge from "../badge/Badge";
import Text from "../typography/Text";
import Empty from "../../assets/icons/empty-white-box.svg";
import Danger from "../../assets/icons/danger.svg";
import ClearIcon from "./cancel.svg";
import Tick from "./tick.svg";
import ChevronDown from "./chevron-down.svg";

import "./select.scss";

export type OptionProps = {
  label: string;
  value: any;
};

type SelectProps = {
  width?: number;
  height?: number;
  placeholder?: string;
  disabled?: boolean;
  options?: Array<OptionProps>;
  isInvalid?: boolean;
  validationText?: string;
  onChange?: (value: any) => void;
  value?: OptionProps;
  clearable?: boolean;
  multiple?: boolean;
  tagColor?: "green" | "red" | "blue" | "yellow" | "purple" | "default";
  collapseTags?: boolean;
  icon?: React.ReactNode;
};

const getTextSizeForControlHeight = (height: number) => {
  return `${(0.41 * height).toFixed()}px`;
};

const Select: React.FC<SelectProps> = ({
  width,
  height,
  placeholder,
  disabled,
  options,
  isInvalid,
  validationText,
  onChange,
  value,
  clearable,
  multiple,
  tagColor,
  collapseTags,
  icon,
}): JSX.Element => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    value ? value : { label: "", value: null }
  );
  const [multiSelectItems, setMultiSelectItems] = useState<any>([]);

  const inputRef = useRef(null);
  const selectPopupRef = useRef(null);
  const selectParent = useRef(null);

  useEffect(() => {
    if (onChange) onChange(multiple ? multiSelectItems : selectedItem);
  }, [selectedItem, multiSelectItems]);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: any) => {
    const parentRef: any = selectParent.current;
    if (parentRef && !parentRef.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  const TagsList = (): JSX.Element => {
    if (collapseTags) {
      return (
        <>
          {multiSelectItems.length > 0 && (
            <>
              <Badge
                label={(multiSelectItems[0] || {}).label}
                showClose
                color={tagColor ? tagColor : "blue"}
                onClose={_removeMultiItem.bind(this, multiSelectItems[0])}
              />
              <span style={{ paddingLeft: "2px" }}></span>
              {multiSelectItems.length - 1 > 0 && (
                <Badge
                  label={`+${multiSelectItems.length - 1}`}
                  color={tagColor ? tagColor : "blue"}
                />
              )}
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {multiSelectItems.length > 0 &&
            multiSelectItems.map((item: OptionProps, index: number) => {
              let { label } = item;
              return (
                <span
                  key={`${label}-${index}`}
                  style={{ paddingLeft: "2px", paddingBottom: "4px" }}
                >
                  <Badge
                    label={label}
                    showClose
                    color={tagColor ? tagColor : "blue"}
                    onClose={_removeMultiItem.bind(this, item)}
                  />
                </span>
              );
            })}
        </>
      );
    }
  };

  const _openSelectDropDown = (): void => {
    if (!disabled) {
      const target = inputRef.current;
      const source = selectPopupRef.current;
      setOpenDropdown(!openDropdown);
      if (target && source) {
        createPopper(target, source, {
          placement: "bottom",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 6],
              },
            },
          ],
        });
      }
    }
  };

  const _isSelectedItem = (currOption: OptionProps): boolean => {
    if (multiple) {
      let isItemPresent = multiSelectItems.find(
        (item: OptionProps) => item.value === currOption.value
      );
      return isItemPresent ? true : false;
    } else {
      return selectedItem && currOption.value === selectedItem.value;
    }
  };

  const _clearSelection = (): void => {
    if (multiple) setMultiSelectItems([]);
    else setSelectedItem({ label: "", value: null });
  };

  const _onClickItem = (currOption: OptionProps) => {
    if (multiple) {
      if (_isSelectedItem(currOption)) {
        _removeMultiItem(currOption);
      } else {
        let currItems = [...multiSelectItems, currOption];
        setMultiSelectItems(currItems);
      }
    } else {
      if (_isSelectedItem(currOption)) {
        setSelectedItem({ label: "", value: null });
      } else {
        setSelectedItem(currOption);
      }
      setOpenDropdown(false);
    }
  };

  const _removeMultiItem = (currOption: OptionProps): void => {
    const afterRemoveItems = multiSelectItems.filter(
      (item: OptionProps) => item.value !== currOption.value
    );
    setMultiSelectItems(afterRemoveItems);
  };

  return (
    <div className="pal-select" ref={selectParent}>
      <Container
        width={width ? width : 300}
        height={height && height >= 24 ? height : 32}
        className={`pal-select-container ${disabled ? "disabled" : ""} ${
          isInvalid ? "isInvalid" : ""
        }`}
        ref={inputRef}
      >
        {icon && (
          <Container
            display="flex"
            alignItems="center"
            maxWidth={40}
            paddingX="3px"
            color="#425a70"
          >
            {icon}
          </Container>
        )}
        {multiple && <TagsList />}
        <input
          onClick={_openSelectDropDown}
          readOnly
          type="input"
          className="pal-select-input-field"
          placeholder={multiSelectItems.length > 0 ? "" : placeholder}
          disabled={disabled}
          value={selectedItem.label}
          style={{
            fontSize: getTextSizeForControlHeight(
              height && height >= 24 ? height : 32
            ),
            cursor: "pointer",
          }}
        />
        {clearable &&
          (!multiple ? selectedItem.value : multiSelectItems.length > 0) && (
            <span
              className="pal-select-down-arrow pal-select-clear"
              onClick={_clearSelection}
            >
              <img
                style={{ width: "12px", height: "12px" }}
                src={ClearIcon}
                alt="clear-svg"
              />
            </span>
          )}
        <span
          className={`pal-select-down-arrow ${
            openDropdown ? "pal-arrow-expanded" : ""
          }`}
          onClick={_openSelectDropDown}
        >
          <img
            style={{ width: "10px", height: "10px" }}
            src={ChevronDown}
            alt="down-arrow-svg"
          />
        </span>
      </Container>
      {isInvalid && validationText && (
        <span className="validate-text">
          <span style={{ paddingRight: "4px", display: "flex" }}>
            <img
              style={{ width: "10px", height: "10px" }}
              src={Danger}
              alt="danger-svg"
            />
          </span>
          {validationText}
        </span>
      )}
      <div ref={selectPopupRef} className="pal-select-popover-content">
        {openDropdown && (
          <Container
            width={width ? width : 300}
            className="pal-select-popover-body"
          >
            {options ? (
              options.map((currOption, index) => {
                let { label } = currOption || {};
                return (
                  <div
                    key={`${index}`}
                    className={`pal-select-dropdown-item ${
                      _isSelectedItem(currOption) ? "pal-selected-item" : ""
                    }`}
                    onClick={_onClickItem.bind(this, currOption)}
                  >
                    <Text color={"inherit"}>{label}</Text>
                    {_isSelectedItem(currOption) && (
                      <div className="pal-selected-tick">
                        <img
                          style={{ width: "12px", height: "12px" }}
                          src={Tick}
                          alt="tick-svg"
                        />
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="pal-select-dropdown-no-item">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src={Empty}
                  alt="empty-svg"
                />
                <Text paddingY={4}>No Options</Text>
              </div>
            )}
          </Container>
        )}
      </div>
    </div>
  );
};

export default Select;
