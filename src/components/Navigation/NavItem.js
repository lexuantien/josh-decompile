import React from 'react';
import styled from 'styled-components';
import {
    ChevronDown
} from 'react-feather';

import Navlink from '../Navlink';
import UnstyledButton from '../UnstyledButton';
import NavUnderline from './NavUnderline';
import Dropdown from './Dropdown';

const noop = () => {};

const NavItem = React.forwardRef(
        ({
                href,
                label,
                size,
                children,
                includesDropdown,
                isDropdownVisible = false,
                toggleDropdown = noop,
                id,
            },
            ref
        ) => {
            const [isActive, setIsActive] = React.useState(false);

            const triggerRef = React.useRef(null);

            const timeoutRef = React.useRef(null);

            React.useEffect(() => {
                return () => {
                    window.clearTimeout(timeoutRef.current);
                };
            }, []);

            let triggerBB = triggerRef.current ?
                triggerRef.current.getBoundingClientRect() :
                {
                    top: 0,
                    left: 0
                };

            return ( <
                Wrapper >
                <
                NavItemLink id = {
                    id
                }
                getProps = {
                    ({
                        isCurrent
                    }) => {
                        if (isCurrent && !isActive) {
                            setIsActive(true);
                        } else if (!isCurrent && isActive) {
                            setIsActive(false);
                        }
                    }
                }
                href = {
                    href
                }
                onFocus = {
                    () => {
                        toggleDropdown(false);
                    }
                }
                style = {
                    {
                        fontWeight: isActive && 'var(--font-weight-bold)',
                    }
                } >
                {
                    label
                } {
                    isActive && < NavUnderline size = {
                        size
                    }
                    />} <
                    /NavItemLink>

                    {
                        includesDropdown && ( <
                            DropdownTrigger ref = {
                                triggerRef
                            }
                            onClick = {
                                () => {
                                    toggleDropdown(!isDropdownVisible);

                                    window.requestAnimationFrame(() => {
                                        const firstChild = document.querySelector(
                                            '#first-child-in-nav'
                                        );

                                        if (firstChild) {
                                            firstChild.focus();
                                        }
                                    });
                                }
                            }
                            aria - label = "View sub-navigation items" >
                            <
                            ChevronDown size = {
                                16
                            }
                            /> <
                            SizeBooster / >
                            <
                            /DropdownTrigger>
                        )
                    }

                    {
                        children && ( <
                            Dropdown ref = {
                                ref
                            }
                            isVisible = {
                                isDropdownVisible
                            }
                            triggerBB = {
                                triggerBB
                            } >
                            {
                                children
                            } <
                            /Dropdown>
                        )
                    } <
                    /Wrapper>
                );
            }
        );

        const Wrapper = styled.div `
  position: relative;
  display: flex;
  align-items: center;
`;

        const NavItemLink = styled(Navlink)
        `
  position: relative;
  padding: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
  font-size: 1rem;

  &:focus {
    outline: 2px auto var(--color-primary);
    outline-offset: 2px;
  }
`;

        const DropdownTrigger = styled(UnstyledButton)
        `
  position: relative;
  padding: 0px 8px;
  margin-left: -8px;
  color: var(--color-text);
  display: grid;
  place-content: center;
`;

        const SizeBooster = styled.span `
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
`;

        export default React.memo(NavItem);