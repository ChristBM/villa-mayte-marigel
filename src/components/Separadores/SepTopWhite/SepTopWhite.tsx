/** @format */

import * as React from 'react'
import { SVGProps } from 'react'

/* function ShapeDivider({ props, color }: Props) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1200 120'
      preserveAspectRatio='none'
      className='svg'
      {...props}
    >
      <path
        d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z'
        className='shape-fill'
      />
      <style jsx>{`
				.svg {
					position: relative;
					display: block;
					width: calc(100% + 1.3px);
					height: 150px;
				}

				.shape-fill {
					fill: ${color ? color: '#ffffff'};
				}
			`}</style>
    </svg>
  )
} */

const ShapeDivider = (props: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg
		data-name='Layer 1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 1200 120'
		preserveAspectRatio='none'
		className='svg'
		{...props}
	>
		<path
			d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z'
			className='shape-fill'
		/>
		<style jsx>{`
			.svg {
				position: relative;
				display: block;
				width: 100%;
				height: 150px;
			}

			.shape-fill {
				fill: #fefefe;
			}
		`}</style>
	</svg>
)

export function SepTopWhite(): JSX.Element {
	return (
		<div className='custom-shape-divider-top'>
			<ShapeDivider />

			<style jsx>{`
				.custom-shape-divider-top {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					overflow: hidden;
					line-height: 0;
				}
			`}</style>
		</div>
	)
}
