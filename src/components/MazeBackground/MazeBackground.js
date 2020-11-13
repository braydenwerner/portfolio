import React, { useEffect, useState } from 'react'
import { maze, NUM_TILES_HEIGHT, NUM_TILES_WIDTH, colors } from '../../constants/constants'
import './MazeBackground.scss'
import PropTypes from 'prop-types'
import { generateDiagonalWaveTraversal } from '../../util'

export default function MazeBackground({ width, height }) {
    const canvasRef = React.createRef(null)

    const tileWidth = width / NUM_TILES_WIDTH
    const tileHeight = height / NUM_TILES_HEIGHT

    const mazeGenerationSpeed = 10
    let mazeStateIndex = 0
    let mazeInterval

    // const maxAnimationDelay = 0
    let mazeAnimationInterval
    // let animationDelay = 0
    // let upToHeight = 0
    // let upToWidth = 0

    const order = generateDiagonalWaveTraversal(NUM_TILES_WIDTH, NUM_TILES_HEIGHT)
    console.log(order)

    const [canvasDisplay, setCanvasDisplay] = useState(true)

    useEffect(() => {
        mazeInterval = setInterval(renderMazeBackground, 1)
    }, [])

    function renderMazeBackground() {
        const canvas = canvasRef.current
        const currentMaze = maze.mazeStates[mazeStateIndex]

        //  10
        mazeStateIndex += mazeGenerationSpeed
        if (mazeStateIndex >= maze.mazeStates.length) {
            mazeStateIndex = maze.mazeStates.length - 1
        }

        if (canvas && maze) {
            const ctx = canvas.getContext('2d')
            ctx.fillStyle = colors.themeBlueForeground
            ctx.fillRect(0, 0, width, height)
            for (let i = 0; i < currentMaze.length; i++) {
                if (currentMaze[i].left) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight)
                    ctx.lineTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight, tileHeight)
                    ctx.lineWidth = 4
                    ctx.strokeStyle = colors.themeGreen
                    ctx.stroke()
                }

                if (currentMaze[i].right) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight + tileHeight)
                    ctx.stroke()
                }

                if (currentMaze[i].top) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight - 1)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight - 1)
                    ctx.stroke()
                }

                if (currentMaze[i].bottom) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight + tileHeight - 1)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight + tileHeight - 1)
                    ctx.stroke()
                }
            }
        }

        if (mazeStateIndex === maze.mazeStates.length - 1) {
            mazeAnimationInterval = setInterval(renderFinishedMazeAnimation, 1)
            clearInterval(mazeInterval)
        }
    }

    function renderFinishedMazeAnimation() {
        const canvas = canvasRef.current
        if (!canvas) return
        //  const ctx = canvas.getContext('2d')

        clearInterval(mazeAnimationInterval)
        setCanvasDisplay(false)
    }

    return (
        <>
            {canvasDisplay && (
                <div>
                    <canvas className='maze-canvas' ref={canvasRef} width={width} height={height}></canvas>
                </div>
            )}
        </>
    )
}

MazeBackground.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}
