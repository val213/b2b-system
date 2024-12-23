"use client"

import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@modules/common/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-neutral-100">
      <Image
        src="/hero-image.jpg"
        alt="Hero background"
        layout="fill"
        quality={100}
        priority
      />
      <div className="absolute inset-0 z-1 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <p className="text-neutral-600 text-xs uppercase">
            IT 项目管理
          </p>

          <Heading
            level="h1"
            className="text-6xl leading-10 text-ui-fg-base font-normal mt-10 mb-5"
          >
            B2B 商务模式支付与结算系统
          </Heading>

          <p className="leading-10 text-ui-fg-subtle font-normal text-lg">
            致力于为企业提供一站式的支付与结算解决方案
          </p>
        </span>
        {/* <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary" className="rounded-2xl">
            <Github />
            Github Repository
          </Button>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
